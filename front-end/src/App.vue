<template>
<div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand">
                <router-link to="/">Home</router-link>
            </a>
            <a class="navbar-brand" v-show="user.type == 'admin'">
                <router-link to="/createproduct">Create product</router-link>
            </a>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0" />
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Account</a>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li>
                                <a>
                                    <router-link class="dropdown-item" to="/login" v-if="!user.id"><i class="fas fa-sign-in-alt"></i>{{ "\xa0" }}Login</router-link>
                                </a>
                            </li>
                            <li>
                                <a @click="logout()">
                                    <router-link class="dropdown-item" to="/login"><i class="fas fa-sign-in-alt"></i>{{ "\xa0" }}Logout</router-link>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <router-link class="dropdown-item" to="/register" v-if="!user.id"><i class="fas fa-user-plus"></i>{{ "\xa0" }}Register</router-link>
                                </a>
                            </li>

                        </ul>
                    </li>

                </ul>
            </div>
        </div>

    </nav>
    <div class="container">
        <div style="padding-left: 55px;">
            <br>
            <br>

            <div class="columns">
                <div class="column is-5">
                    <router-link to="/" style="font-size:30px; color:black;"><b>Shopping mall</b> </router-link>

                </div>
                <div class="column">
                    <div class="columns">
                        <div class="column">
                            <input class="form-control me-2" type="search" placeholder="Search product" aria-label="Search product" style="width:570px;" />
                        </div>
                        <div class="column ">
                            <button class="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="container">
 

                <router-view :key="$route.fullPath" @auth-change="onAuthChange" class="d-flex justify-content-center" />

                
    </div>
     
</div>
</template>

<script>

import axios from 'axios'
export default {

    data() {
        return {
            username: "",
            user: {},
            type: ''
        };
    },
    methods: {
        onAuthChange() {
            const id = localStorage.getItem("id");
            if (id != '') {
                this.getUser(id);
            }
        },
        getUser(id) {
            axios.get("http://localhost:3000/loginbyid/" + id).then((res) => {
                this.user = res.data[0];
            });
        },
        logout() {
            localStorage.removeItem("id");
            localStorage.removeItem("type");
            this.user = {};
            this.$router.push({
                name: "login"
            });
        },
    },
    created() {
        this.onAuthChange();
        this.username = localStorage.getItem("name");
    },
};
</script>
