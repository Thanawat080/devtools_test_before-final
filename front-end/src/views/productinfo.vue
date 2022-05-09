<template>
<div class="container">
    <div class="col-12">
        <br />
        <br />
        <br />
        <div class="row" style="background-color:#f8f9fa; height:500px;   border-radius: 15px;">

            <div class="col-4" style="margin-top:20px;">
                <img :src=pic alt="" />
            </div>
            <div class="col-6" style="margin-top:20px;">
                <b style="font-size:25px;">{{title}}</b>
                <br>
                <div class="columns" style="margin-top:0px;">
                    <div class="column is-4" style="border-right: 1px solid rgba(0,0,0,.14); height:45px;">
                        <b style="font-size:20px; color:#ff7f7f; text-decoration: underline  red;">4.7</b>
                        <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" style="width:20px; height:50px; margin-top:-5px; margin-left:5px;" fill="red">
                            <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">

                            </polygon>
                        </svg>
                        <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" style="width:20px; height:50px; margin-top:-5px;" fill="red">
                            <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">

                            </polygon>
                        </svg>
                        <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" style="width:20px; height:50px; margin-top:-5px;" fill="red">
                            <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">

                            </polygon>
                        </svg>
                        <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" style="width:20px; height:50px; margin-top:-5px;" fill="red">
                            <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">

                            </polygon>
                        </svg>
                        <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" style="width:20px; height:50px; margin-top:-5px;" fill="red">
                            <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">

                            </polygon>
                        </svg>
                    </div>
                    <div class="column is-4" style="border-right: 1px solid rgba(0,0,0,.14); height:45px;">

                        <span style="margin-left:50px; font-size:17px;"><b style="text-decoration: underline  black;">59.6k </b><b> Ratings</b></span>
                    </div>
                    <div class="column is-4">
                        <span style="margin-left:50px; font-size:17px;"><b> 297.1k Sold</b></span>
                    </div>
                </div>
                <p style="margin-top:5px;">{{description}}</p>

                <p style="margin-top:15px; font-size:23px;"> <b>ราคา {{price}} ฿</b></p>
                <div class="columns" style="margin-top:15px;">
                    <div class="column is-4">
                        <p style=" font-size:16px;"><b>โค้ดส่วนลดจากร้านค้า</b></p>
                    </div>
                    <div class="column" style="color:red; width:65px; height:30px;">ลด ฿ 35</div>
                    <div class="column" style="color:red; width:65px; height:30px;">ลด ฿ 100</div>
                    <div class="column" style="color:red; width:65px; height:30px;">ลด ฿ 50</div>
                    <div class="column" style="color:red; width:65px; height:30px;">ลด ฿ 135</div>
                </div>

                <div class="columns">
                    <div class="column is-3">
                        <div class="row" style="
              border: #ddd 1px solid;
              border-radius: 8px;
              align-items: center;
              width: 120px;
              height: 44px;
              margin-left: 8px;
              margin-top: -1px;
            ">
                            <div class="col" style="color: inherit;">
                                <img src="https://www.mercular.com/img/icons/menu/arrow-minus-disabled.svg" alt="" />
                            </div>
                            <div class="col" style="padding: 0px 10px 0px 10px;">1</div>
                            <div class="col" style="color: 1b1b1b; margin-top: -5px;">
                                <img src="https://www.mercular.com/img/icons/menu/arrow-plus.svg" alt="" />
                            </div>

                        </div>
                    </div>
                    <div class="column" style="margin-top:8px; margin-left:-20px;">
                        <span>
                            <b>
                                <span>สินค้ามีทั้งหมด</span>
                                <span style="color: gray;"> {{quantity}} ชิ้น</span>
                            </b>
                        </span>
                    </div>
                </div>

                <div class="row" style="margin-top: 10px; margin-left: 0px;">
                    <div style="
                width: 210px;
                height: 50px;
                align-items: center;
                border-radius: 28px;
                border: #ddd 1px solid;
                padding: 10px;
              ">
                        <img src="https://www.mercular.com/img/icons/menu/add-to-cart.svg" alt="" style="margin-left: 42px;" />
                        <span style="font-size: 16px; padding-left: 12px;">
                            ใส่รถเข็น
                        </span>
                    </div>
                    <div style="
                width: 210px;
                height: 50px;
                border-radius: 28px;
                border: #ddd 1px solid;
                padding: 10px;
                align-items: center;
                margin-left: 15px;
                background: linear-gradient(180deg, #00cdf8 0%, #0066dd 100%);
              ">
                        <span style="
                  font-size: 16px;
                  margin: 20px 69px;
                  font-weight: bold;
                  color: #fff;
                ">
                            ซื้อเลย
                        </span>
                    </div>
                </div>
            </div>

            <div class="columns" style="margin-top:-30px;">
                <div class="column is-1">
                    <p>Share : </p>
                </div>
                <div class="column is-2"><img src="https://sexualhealthcmu.com/home/img/iconfm.png" alt="" style="width:15%;  margin-left:-45px;"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="" style="width:15%;  margin-left:5px;"><img src="https://www.manitawedding.com/wp-content/uploads/2018/05/instagram-logo-png-transparent-background-800x799.png" alt="" style="width:15%;  margin-left:10px;"><img src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/9f/Twitter_bird_logo_2012.svg/2534px-Twitter_bird_logo_2012.svg.png" alt="" style="width:15%;  margin-left:10px;"></div>
                <div class="column">
                    <svg style="width:50px; height:30px;">
                        <path d="M19.469 1.262c-5.284-1.53-7.47 4.142-7.47 4.142S9.815-.269 4.532 1.262C-1.937 3.138.44 13.832 12 19.333c11.559-5.501 13.938-16.195 7.469-18.07z" fill="none" stroke="#FF424F" stroke-width="1.5"></path>
                    </svg>
                    <label>Favorite (86)</label>

                </div>

            </div>
        </div>
        <!-- comment -->
        <div class="columns ">
            <div class="column is-9">
                <div class="row" style="margin-top: 50px;">
                    <p>Comment :</p>
                    <div v-for="(value, index) in allcomment" :key="index" style="margin-top: 20px;">
                        <div class="row" @click="reply(value.id)" :style="{'background-color':value.colorofcomment}">

                            <div class="col-1">
                                <img src="https://bahmansport.com/media/com_store/images/empty.png" style="width: 70px; height: 70px; border-radius: 360px;" />
                            </div>
                            <div class="col-10">
                                <div class="row">
                                    <b>{{ value.first_name }} {{ value.last_name }}</b>
                                </div>
                                <div class="row" style="
                overflow-wrap: break-word;
                word-wrap: break-word;
                hyphens: auto;
              ">
                                    <div class="col-12">
                                        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;{{ value.comment }}
                                    </div>
                                </div>
                            </div>
                            <!-- comment from admin -->
                            <div class="row" style="margin-left: 0px;" v-if="index == idcommentforreply">
                                <div class="col-11">
                                    <div class="form-floating">
                                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" style="width: 80%; height: 20px;" v-model="replycomment"></textarea>
                                        <label for="floatingTextarea" style="margin-top: -10px;">
                                            Comments
                                        </label>
                                    </div>
                                </div>
                                <div class="col-1" id="ment" @click="confirmreplycomment()">
                                    <svg width="26" height="26" fill="currentColor" style="margin-top: 12px;" class="bi bi-send" viewBox="0 0 16 16">
                                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                    </svg>
                                </div>
                            </div>
                            <!-- ---------------------------- -->
                        </div>

                        <!-- sub comment -->
                        <div v-for="(value1, index1) in allreplycomment" :key="index1">
                            <div v-if="value1.idcomment == index" style="margin-left:100px; margin-top: 20px;" class="row">
                                <div class="col-1">
                                    <img src="https://bahmansport.com/media/com_store/images/empty.png" style="width: 70px; height: 70px; border-radius: 360px;" />
                                </div>
                                <div class="col-10">
                                    <div class="row">
                                        <b>{{ value1.first_name }} {{ value1.last_name }}</b>
                                    </div>
                                    <div class="row" style="
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  hyphens: auto;
                ">
                                        <div class="col-12">
                                            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;{{ value1.reply }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--  -->
                    </div>
                </div>

                <!-- Comment from user -->
                <div class="row" style="margin-top: 50px;">

                </div>
                <br />
                <div class="row">
                    <div class="col-11">
                        <div class="form-floating">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" v-model="comment"></textarea>
                            <label for="floatingTextarea">Comments</label>
                        </div>
                    </div>
                    <div class="col-1" id="ment" @click="confirmcomment()">
                        <svg width="26" height="26" fill="currentColor" style="margin-top: 12px;" class="bi bi-send" viewBox="0 0 16 16">
                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                        </svg>

                    </div>
                </div>
            </div>
            <div class="column" style="margin-top:50px;">
                <div style="border-radius: 15px; width:100%; height:350px; background-color:#f8f9fa;">
                    <div class="columns" style="margin-left:5px;">
                        <div class="column">
                            <div class="card" style="width:120px; height:150px;">
                                <div class="card-content">

                                    <p class="subtitle">
                                        ส่วนลด 70 ฿
                                    </p>
                                </div>
                                <footer class="card-footer">

                                    <div class="button is-danger" style="margin-top:-4px;">
                                        เก็บโค้ด
                                    </div>

                                </footer>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card" style="width:120px; height:150px;">
                                <div class="card-content">

                                    <p class="subtitle">
                                        ส่วนลด 150 ฿
                                    </p>
                                </div>
                                <footer class="card-footer">

                                    <div class="button is-danger" style="margin-top:-4px;">
                                        เก็บโค้ด
                                    </div>

                                </footer>
                            </div>
                        </div>
                    </div>
                    <div class="columns" style="margin-left:5px;">
                        <div class="column">
                            <div class="card" style="width:120px; height:150px;">
                                <div class="card-content">

                                    <p class="subtitle">
                                        ส่วนลด 100 ฿
                                    </p>
                                </div>
                                <footer class="card-footer">

                                    <div class="button is-danger" style="margin-top:-4px;">
                                        เก็บโค้ด
                                    </div>

                                </footer>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card" style="width:120px; height:150px;">
                                <div class="card-content">

                                    <p class="subtitle">
                                        ส่วนลด 50 ฿
                                    </p>
                                </div>
                                <footer class="card-footer">

                                    <div class="button is-danger" style="margin-top:-4px;">
                                        เก็บโค้ด
                                    </div>

                                </footer>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            post: [],
            comment: '',
            first_name: '',
            last_name: '',
            phone_number: '',
            userid: '',
            email: '',
            allcomment: [],
            color: '',
            alllike: [],
            find: 0,
            countlike: 0,
            allreport: [],
            reportmodel: '',
            replycomment: '',
            allreplycomment: [],
            idcomment: 0,
            idcommentforreply: -1,
            tag: '',
            colorofcomment: '',
            pic: '',
            title: '',
            description: '',
            price: 0,
            quantity: 0
        }
    },
    methods: {
        confirmreplycomment() {
            console.log("Test")
            this.allreplycomment.push({
                first_name: this.first_name,
                last_name: this.last_name,
                userid: this.userid,
                commentid: this.$route.params.id,
                reply: this.replycomment,
                idcomment: this.idcommentforreply

            })
            axios
                .put('http://localhost:3000/replycomment/' + this.$route.params.id, {
                    replycomment: this.allreplycomment,
                })
                .then(() => {
                    axios
                        .get(
                            'http://localhost:3000/specificproduct/' + this.$route.params.id,
                        )
                        .then((res) => {
                            this.allreplycomment = res.data[0].replycomment
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        confirmcomment() {
            axios.get('http://127.0.0.1:8000/predict/' + this.comment, {
                withCredentials: false
            }).then((res) => {
                this.tag = res.data.prediction
            })
            if (this.tag == 1) {

                this.colorofcomment = "gray"
            }
            if (this.tag == 2) {

                this.colorofcomment = "cyan"
            }
            if (this.tag == 3) {

                this.colorofcomment = "green"
            }

            if (this.tag == 0) {

                this.colorofcomment = "red"
            }
            this.allcomment.push({
                first_name: this.first_name,
                last_name: this.last_name,
                userid: this.userid,
                comment: this.comment,
                id: this.allcomment.length,
                tag: this.tag,
                colorofcomment: this.colorofcomment
            })
            axios
                .put('http://localhost:3000/comment/' + this.$route.params.id, {
                    comment: this.allcomment,
                })
                .then(() => {
                    axios
                        .get(
                            'http://localhost:3000/specificproduct/' + this.$route.params.id,
                        )
                        .then((res) => {
                            this.allcomment = res.data[0].comment
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        reply(idcomment) {
            console.log(idcomment)
            this.idcommentforreply = idcomment

        }
    },
    created() {
        axios
            .get('http://localhost:3000/specificproduct/' + this.$route.params.id)
            .then((res) => {
                this.pic = res.data[0].pic
                this.title = res.data[0].title
                this.description = res.data[0].description
                this.price = res.data[0].price
                this.quantity = res.data[0].quantity
                this.allcomment = res.data[0].comment
                this.allreplycomment = res.data[0].replycomment
                if (localStorage.getItem("type") != "admin") {
                    for (let i = 0; i < this.allcomment.length; i++) {
                        this.allcomment[i].colorofcomment = ''
                    }

                }
            })
            .catch((err) => {
                console.log(err)
            })

        axios
            .get('http://localhost:3000/specificuser/' + localStorage.getItem('id'))
            .then((res) => {
                this.first_name = res.data[0].first_name
                this.last_name = res.data[0].last_name
                this.userid = res.data[0]._id
            })
            .catch((err) => {
                console.log(err)
            })
    },
}
</script>

<style>
#ment:hover {
    cursor: pointer;
}

#love:hover {
    cursor: pointer;
}

#report:hover {
    cursor: pointer;
}

.modal-backdrop {
    z-index: 1040 !important;
    display: none;
}

.modal-content {
    margin: 2px auto;
    z-index: 1100 !important;
}
</style>
