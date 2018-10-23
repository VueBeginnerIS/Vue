<script>
export default {
    page1:{
        1:{
            html:`<div id="app">
    <p>{{message}}</p>
</div> `,
            js:`var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
  }
})`,
        },
        2:{
            html:`<div id="app">
    <input type="text" placeholder="input Value" v-model="inputA">
    <p>the value of the input is: {{ input }}</p>
</div>`,
            js:`var app = new Vue({
  el: '#app',
  data: {
    input: '',
  }
})`
        },
        3:{
            html:`<div id="app">
    <section id="head">
        <h2 v-pre class="text-center">Example</h2>
        <div class="box">
            <h5>output</h5>
            <div class="output">
                <div class="row">
                    <div class="col">
                        <h4 class="text-center py-3">Input your detail</h4>
                        <div class="input-group mb-3 ">
                            <div class="input-group-prepend">
                                <span class="input-group-text text-white bg-dark" id="inputGroup-sizing-default">ชื่อผู้รับ</span>
                            </div>
                            <input type="text" class="form-control " aria-label="Default" aria-describedby="inputGroup-sizing-default"
                                v-model="name">
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text text-white bg-dark" id="inputGroup-sizing-default">ที่อยู่</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                                v-model="addess">
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text text-white bg-dark" id="inputGroup-sizing-default">จังหวัด</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                                v-model="province">
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text text-white bg-dark" id="inputGroup-sizing-default">รหัสไปรษณีย์</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                                v-model="Zipcode">
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text text-white bg-dark" id="inputGroup-sizing-default">เบอร์โทร</span>
                            </div>
                            <input type="number" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                                v-model="phone">
                        </div>
                    </div>
                        <div class="col">
                        <div class="card text-white bg-dark">
                            <div class="card-body">
                                <h5 class="card-title text-center">Order Preview</h5>
                                <h6 class="card-subtitle mb-2 ">ชื่อผู้รับ : {{name}}</h6>
                                <h6 class="card-subtitle mb-2  pt-3">ที่อยู่ผู้รับ</h6>
                                <p class="card-text">{{addess+" "+province+" "+Zipcode+" "}}</p>
                                 <h6 class="card-subtitle mb-3 ">หมายเลขโทรศัพท์ : {{phone}}</h6>
                                 <h6 class="card-subtitle mb-2 ">รายการสินค้า</h6>
                                 <ul>
                                    <li v-for="item in items" :key="item.index">{{item.item+" ราคา "+item.price+"
                                        บาท "}}</li>
                                </ul>
                                <p class="card-text">ยอดรวมทั้งหมด {{ sum }} บาท</p>
                                <div class="text-right">
                                     <button type="button" class="btn text-white" style="background:#42b883">Print</button>
                                 </div>
                            </div>
                        </div>
                    </div>
                 </div>
             </div>
         </div>
     </section>
</div>`,
            js:`var app = new Vue({
    el: '#app',
    data: {
        name: "Noppadon Jannok",
        addess: "",
        province: "songkla",
        Zipcode: "90000",
        phone: "0835354829",
        totel: 0,
        items: [
            { item: "CPU", price: 12000 },
            { item: "RAM", price: 4700 },
            { item: "GPU", price: 15000 },
            { item: "OS", price: 4000 }
            ],
    },
    computed: {
        /* eslint-disable */
        sum() {
        for (const i in this.items) {
            this.totel += this.items[i].price;
        }
        return this.totel;
        }
    },
})`
        }
    },

    page2:{

    }
}
</script>