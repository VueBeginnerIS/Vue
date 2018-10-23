<<<<<<< HEAD
<template>
    <div id="html" class="skill">
        <section id="head">
          <h2 v-pre class="text-center"><span>{{</span>message<span>}}</span></h2>
          <div class="row">
            <div class="col-6">
              <div class="box">
                <h5>HTML</h5>
                  <highlight-code lang="HTML">{{ ex1html }}</highlight-code>
              </div> 
            </div>
            <div class="col-6">
              <div class="box">
                <h5>JS</h5>
                  <highlight-code lang="JavaScript">{{ ex1js }}</highlight-code>
              </div> 
            </div>
          </div>
          <div class="box mt-4">
            <h5>output</h5>
            <div class="output">
              <p class="card-text text-center">{{ message1 }}</p>
            </div>
        </div>  
      </section>

      <section id="head">
          <h2 v-pre class="text-center"><span>{{</span>message<span>}}</span></h2>
          <div class="row">
            <div class="col-6">
              <div class="box">
                <h5>HTML</h5>
                  <highlight-code lang="HTML">{{ ex1html }}</highlight-code>
              </div> 
            </div>
            <div class="col-6">
              <div class="box">
                <h5>JS</h5>
                  <highlight-code lang="JavaScript">{{ ex1js }}</highlight-code>
              </div> 
            </div>
          </div>
          <div class="box mt-4">
            <h5>output</h5>
            <div class="output">
              <p class="card-text text-center">{{ message1 }}</p>
            </div>
        </div>  
      </section>

    </div>

    
</template>

<script>
import codePreview from '@/components/codePreview.vue';
export default {
    data(){
        return{
            ex1html:codePreview.page1[1].html,
            ex1js:codePreview.page1[1].js,
            message1:"Hello Vue!"
        }
    }
}
</script>


<style  scoped>

section {
  padding-left: 8em;
  padding-right: 8em;
  padding-top: 9em; 
  align-items: center;
}

section div.row{
  padding-top: 3em;
}

section h2{
  color: #35495E;
}
section h2 span{
  color: #42B883;
}

.box{
  display: block;
  overflow-x: auto;
  background:#e7e9db;
  border-radius: 10px;
  color: #35495E;
  padding: 15px 15px 00px 15px;
  box-shadow:3px 6px 15px rgb(78, 94, 112);
}

.output{
  display: block;
  overflow-x: auto;
  background: whitesmoke;
  border-radius: 10px;
  color: #4f424c;
  padding: 0.5em;
  margin-bottom: 15px;
  
}


highlight-code{

}


</style>

=======
>>>>>>> 244ad3ca74af42380df9f634060ec68b9231d434
