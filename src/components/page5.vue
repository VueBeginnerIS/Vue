<template>
    <div>
        <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
            <section id="message" v-if="show">
                <div class="card text-white bg-dark">
                <div class="card-header">
                    <span v-pre>v-if</span>
                </div>
                <div class="card-body">
                    <h5 class="card-title">output</h5>
                    <p class="card-text" v-if="condition > 0.5">Hello Vue</p>
                    <p class="card-text">condition : {{condition}}</p>
                    <button type="submit" class="btn btn-light" @click="con">Toggle</button>
                </div>
                </div> 
            </section>
        </transition>

        <section id="message">
            <div class="card text-white bg-dark">
            <div class="card-header">
                <span v-pre>v-if</span>
            </div>
            <div class="card-body">
                <h5 class="card-title">output</h5>
                    <div class="text-center">
                        <button type="submit" class="btn btn-light" @click="toggle">Toggle</button>
                    </div>
            </div>
            </div> 
        </section>

        <section id="message">
            <div class="card text-white bg-dark">
            <div class="card-header">
                <span v-pre>v-if</span>
            </div>
            <div class="card-body">
                <h5 class="card-title">output</h5>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputGroupSelect01">CSS Framework</label>
                    </div>
                    <select class="custom-select" id="inputGroupSelect01" v-model="type">
                        <option value="bootstrap">Bootstrap</option>
                        <option value="bulma">Bulma css</option>
                        <option value="vuetify">Vuetify</option>
                        
                    </select>
                </div>
                    <div v-if="type === 'bootstrap'">
                        <div class="row">
                            <div class="col-3">
                                <img src="../assets/bootstrap.png" alt="" width="200px">
                            </div>
                            <div class="col-9">
                                <p class="card-text">Build responsive, mobile-first projects on the web with the world's most popular front-end component library.</p>
                                <p class="card-text">Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery.</p>
                            </div>
                        </div>
                        
                    </div>
                    <div v-else-if="type === 'bulma'">
                        <div class="row">
                            <div class="col-3">
                                <img src="../assets/bulma.png" alt="" width="200px">
                            </div>
                            <div class="col-9">
                                <p class="card-text">Bulma is an open source CSS framework based on Flexbox and used by more than 100,000 developers.</p>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="type === 'vuetify'">
                        <div class="row">
                            <div class="col-3">
                                <img src="../assets/vuetify.png" alt="" width="200px">
                            </div>
                            <div class="col-9">
                                <p class="card-text">Vuetify is a progressive framework that attempts to push web development to the next level. In order to best accomplish this task, some sacrifices had to be made in terms of support for older versions of Internet Explorer. This is not an exhaustive list of compatible browsers, but the main targeted ones.</p>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <p class="card-text">Select CSS Framework</p>
                    </div>
            </div>
            </div> 
        </section>



    </div>
</template>

<script>
 export default {
     name: "Page4",
     data(){
         return{
             condition:'',
             show:true,
             type:'',
             
         }
     },
     computed:{
        
     },
     methods:{
         toggle(){
             if (this.show) {
                 return this.show = false;
             } else {
                 return this.show = true;
             }
             
         },
         con(){
             this.condition = Math.random();
         }
     }
 }
</script>

<style scoped>

section {
  padding: 6em;
  align-items: center;
}

.container {
  box-shadow: 0px 0px 40px lightgray;
}

</style>
 

 