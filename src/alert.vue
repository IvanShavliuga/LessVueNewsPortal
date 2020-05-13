<template lang="pug">
div.alert
  h2.alert__header {{alert.header}}
  div.alert__image
    div.alert__icon.fas.fa-exclamation-circle.icon__alert
  div.alert__text {{alert.body}}
  div.alert__status
    span.alert__user {{users[alert.userId].login}}
    span.alert__read 
      i(v-if="alert.read").fa.fa-check-circle.icon.icon__status
      i(v-else).fas.fa-exclamation.icon.icon__status
    span.alert__index {{alert.status}}
    span.alert__date {{alert.date}}
  div.alert__control
    button(@click="read" :data-value="alert" :data-status="alert.status").alert__button Прочитано
    input(v-model="status" type="text").alert__input
    button(@click="change").alert__button Изменить статус 
  div.alert__error
    span(v-if="maxlen").alert__log больше 30 символов
    span(v-if="changeflag").alert__log Статус изменен
</template>]
<script>
export default {
  props: {
    alert: {
      type: Object,
      required:true    
    },
    users: {
      type:Array,
      required: true       
    }  
  }, 
  data() {
    return {
      status:"200 OK",
      maxlen:false,
      changeflag:false     
    }
  },
  methods: {
    read() {
      this.$store.dispatch("readalert",this.alert);    
    },
    change() {
      if(this.maxlen<=30) {
        this.alert.status=this.status  
        this.changeflag=true
            
      }      
    }  
  },
  watch: {
    status() {
      if(this.status.length>30) 
        this.maxlen=true
      else
        this.maxlen=false   
    }  
  }

}
</script>