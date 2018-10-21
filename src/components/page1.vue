<template>

  <div class="skill">

      <section id="message">
        <div class="card text-white bg-dark">
          <div class="card-header">
            <span v-pre> {{ message }}</span>
          </div>
          <div class="card-body">
            <h5 class="card-title">output</h5>
              <p class="card-text">{{ message1 }}</p>
          </div>
        </div> 
      </section>

      <section id="message">
        <div class="card text-white bg-dark">
          <div class="card-header">
            <span > v-model</span>
          </div>
          <div class="card-body">
            <h5 class="card-title">output</h5>
              <input type="text" class="form-control my-4" placeholder="input Value" v-model="inputA">
              <p class="card-text">the value of the input is: {{ inputA }}</p>
          </div>
        </div> 
      </section>

      <section id="message1">
        <div class="card text-white bg-dark">
          <div class="card-header">
            <span > v-model</span>
          </div>
          <div class="card-body">
            <h5 class="card-title">output</h5>
            <div class="container">
              <div class="row">
                <div class="col">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroup-sizing-default">ชื่อผู้รับ</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="name">
                  </div>

                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroup-sizing-default">ที่อยู่</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="addess">
                  </div>

                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroup-sizing-default">จังหวัด</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="province">
                  </div>

                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroup-sizing-default">รหัสไปรษณีย์</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="Zipcode">
                  </div>

                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroup-sizing-default">เบอร์โทร</span>
                    </div>
                    <input type="number" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="phone">
                  </div>
                  
                  
                </div>
                <div class="col">
                  <div class="card text-muted">
                    <div class="card-body">
                      <h5 class="card-title text-center">Order Preview</h5>
                      <h6 class="card-subtitle mb-2 text-muted">ชื่อผู้รับ : {{name}}</h6>
                      <h6 class="card-subtitle mb-2 text-muted pt-3">ที่อยู่ผู้รับ</h6>
                      <p class="card-text">{{addess+" "+province+" "+Zipcode+" "}}</p>
                      <h6 class="card-subtitle mb-3 text-muted">หมายเลขโทรศัพท์ : {{phone}}</h6>
                      <h6 class="card-subtitle mb-2 text-muted">รายการสินค้า</h6>
                      <ul>
                        <li  v-for="item in items" :key="item.index">{{item.item+" ราคา "+item.price+" บาท "}}</li>
                      </ul>
                      <p class="card-text">ยอดรวมทั้งหมด {{ sum }} บาท</p>
                      <div class="text-right">
                        <button type="button" class="btn btn-info">Print</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </section>
  
    

  </div>
</template>

<script>
export default {
  name: "Page1",
  data() {
    return {
      totel:0,
      message1: "Hello Vue",
      inputA: "",
      name:"Noppadon Jannok",
      addess:"",
      province:"songkla",
      Zipcode:"90000",
      phone:"0835354829",
      items: [
        {item:"CPU",price:12000},
        {item:"RAM",price:4700},
        {item:"GPU",price:15000},
        {item:"OS",price:4000}
      ]
    };
  }, 
  computed:{
    /* eslint-disable */
    sum(){
      for (const i in this.items) {
        this.totel += this.items[i].price;
      }
      return this.totel;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>

section {
  padding: 6em;
  align-items: center;
}

#message p {
  text-align: center;
}

input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687f7f;
}


</style>
