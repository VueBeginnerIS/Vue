<template>

  <div>
    <section id="message">
        <div class="card text-white bg-dark">
          <div class="card-header">
            <span v-pre> v-for </span>
          </div>
          <div class="card-body">
            <h5 class="card-title">output</h5>
            <h5 class="card-title text-center">All Task</h5>
            <div class="row">
              <div class="col">
                <ul>
                  <li v-for="task in tasks" :key="task.index" v-text="task.description"></li>
                </ul>
              </div>
              <div class="col" id="com">
                <ul>
                  <li v-for="task in tasks" :key="task.index" v-text="task.completed"></li>
                </ul>
              </div>
            </div>
          </div>
        </div> 
      </section>

      <section id="message">
        <div class="card text-white bg-dark">
          <div class="card-header">
            <span v-pre> v-for </span>
          </div>
          <div class="card-body">
            <h5 class="card-title">output</h5>
            <h5 class="card-title text-center">incompleted Task</h5>
              <ul>
                <li v-for="task in tasks" :key="task.index" v-if="!task.completed" v-text="task.description"></li>
              </ul>
          </div>
        </div> 
      </section>

      <section id="message">
        <div class="card text-white bg-dark">
          <div class="card-header">
            <span > v-for </span>
          </div>
          <div class="card-body">   
            <h5 class="card-title">output</h5>
              <div class="input-group mb-3">
                <input type="text" 
                  class="form-control" 
                  placeholder="Add task description" 
                  aria-label="Recipient's username" 
                  aria-describedby="basic-addon2"
                  v-model="newTask"
                >
              </div>
              <div class="col-auto my-1">
                <div class="custom-control custom-checkbox mr-sm-2">
                  <input type="checkbox" class="custom-control-input" id="customControlAutosizing" v-model="newcompleted">
                  <label class="custom-control-label" for="customControlAutosizing">Completed is true</label>
                </div>
              </div>
              <div class="text-right">
                
                  <button class="btn btn-outline-secondary" type="button" @click="addTask">Add</button>
                
              </div>
          </div>
        </div> 
      </section>

    <section id="form">
          <form @submit.prevent="appSkill">
            <input type="text" placeholder="Enter a skill you have.." v-model="skill" v-validate="'min:5'" name="skill">
            <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
            <p class="alert" v-if="errors.has('skill')">{{ errors.first('skill') }}</p>
            </transition>   
          </form>
          <ul>
            <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
              <li v-for="(data, index) in skills" :key='index'>{{data.skill}}
                <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
              </li>
            </transition-group>
          </ul>  
          <P>This are the skills that you possess</P>
    </section>
    
  </div>
  

 

</template>

<script>
export default {
  name: "Page2",
  data() {
    return {
      tasks: [

                    {description: 'Go to the store', completed: true},

                    {description: 'Finish screencast', completed: false},

                    {description: 'Make donation', completed: false},

                    {description: 'clear inbox', completed: false},

                    {description: 'Make dinner', completed: false},

                    {description: 'Clean room', completed: true},

                ],

      newcompleted: true,
      newTask:"",

      skill: "",
      skills: [{ skill: "Vue.js" }, { skill: "Frontend Developer" }]
    };
  },
  methods: {
    addTask(){
      this.tasks.push({ description: this.newTask , completed: this.newcompleted});
      this.newTask = "";
    },
    appSkill() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.skills.push({ skill: this.skill });
          this.skill = "";
        } else {
          // console.log("Not valid");
        }
      });
    },
    remove(id) {
      this.skills.splice(id, 1);
    }
  }
};
</script>

<style  scoped>

section {
  padding: 6em;
  align-items: center;
}

#com ul {
  list-style-type: none;
}

#form ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

#form ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #e0edf4;
  border-left: 5px solid #3eb3f6;
  margin-bottom: 2px;
  color: #3e5252;
}

p {
  text-align: center;
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

label{
  color: #687f7f;
}

select {
  background-color: #323333;
  color: #687f7f;
  border: 0;

}

.alert {
  background: #fdf2ce;
  font-weight: bold;
  display: inline-block;
  padding: 5px;
  margin-top: -20px;
}

i {
  float: right;
}
</style>


