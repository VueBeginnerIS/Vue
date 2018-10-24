<template>
  <div class="input" >

    <section id="message">
        <div :class="classMe">
          <div class="card-header">
            <span v-pre> v-on:click </span>
          </div>
          <div class="card-body">
            <h5 class="card-title">output</h5>
            <h5 class="card-title text-center"> {{number}}</h5>
            <div class="text-center">
            <button type="submit" class="btn btn-light mx-2" @click="number+=10">+</button>
            <button type="submit" class="btn btn-light" @click="number-=10">-</button>
            </div>
          </div>
        </div> 
      </section>

      <section id="message">
        <div :class="classMe">
          <div class="card-header">
            <span v-pre> v-on:click </span>
          </div>
          <div class="card-body">
            <h5 class="card-title">output</h5>
            <h5 class="card-title text-center">Show Text</h5>
            <div class="text-center">
            <button type="submit" class="btn btn-light" @click="showTitle">
              <i :class="icon"></i>
              </button>
            </div>
          </div>
        </div>   
        <transition name="alert-in" enter-active-class="animated bounceInDown" leave-active-class="animated hinge">
          <div class="card-body text-white bg-dark" v-show="show">
            <p class="card-title pt-4 px-3"  v-text="lorem"></p>
          </div>
        </transition>
           

      </section>
      
     <section id="message">
        <div :class="classMe">  
          <div class="card-header">
            <span v-pre> v-on:click </span>
          </div>
          <div class="card-body">
            <h5 class="card-title">output</h5>
            <h5 class="card-title text-center">Alert</h5>
            <div class="text-center">
            <button type="submit" class="btn btn-light mx-2" @click="say('Hello Vue')">Say Hello Vue</button>
            </div>
          </div>
        </div> 
      </section>

      <section id="message">
        <div :class="classMe">
          <div class="card-header">
            <span v-pre> v-on:click </span>
          </div>
          <div class="card-body">
            <h5 class="card-title">output</h5>
            <h5 class="card-title text-center">Click to change style</h5>
            <div class="text-center">
            <button type="submit" class="btn btn-light mx-2" @click="changeBgWhite">Light</button>
            <button type="submit" class="btn btn-dark mx-2" @click="changeBgDark">Dark</button>
            <button type="submit" class="btn btn-danger mx-2" @click="changeBgDanger">Danger</button>
            <button type="submit" class="btn btn-warning mx-2" @click="changeBgWarning">Warning</button>
            <button type="submit" class="btn btn-info mx-2" @click="changeBgInfo">Info</button>
            </div>
          </div>
        </div> 
      </section>

      

  </div>
</template>

<script>
  
  export default {
    
      data(){
        return{
          number:0,
          lorem:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          show: false,
          icon:"fas fa-angle-down",
          classMe:'card text-white bg-dark'
        }
      },
      methods:{
        showTitle(){
          if (this.show){
            this.show = false;
            this.icon = "fas fa-angle-down";
          }else{
            this.show = true;
            this.icon = "fas fa-angle-up";
          }
        },
        say(message){
          alert(message)
          
        },
        changeBgWhite(){
          this.classMe ='card text-drak bg-light';
        },
        changeBgDark(){
          this.classMe ='card text-light bg-dark';
        },
        changeBgDanger(){
          this.classMe ='card text-light bg-danger';
        },
        changeBgWarning(){
          this.classMe ='card text-dark bg-warning';
        },
        changeBgInfo(){
          this.classMe ='card text-light bg-info';
        },

      }
  }
        
</script>



<style  scoped>

section {
  padding: 6em;
  align-items: center;
}


.container {
  box-shadow: 0px 0px 40px lightgray;
}

input {
  width: 100%;
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687f7f;
}


</style>



