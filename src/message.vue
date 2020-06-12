<template lang="pug">
div.message 
  h3.message__title(:style="(message.read)?'background-color:rgba(175,197,220,0.6)':'background-color:rgba(230,160,245,0.7)'") {{message.title}}
  p.message__info
    span.message__info__system(v-if="message.type==='system'||message.type==='user-add'||message.type==='group-add'") system
    span.message__info__user(v-else) {{users[message.from].login}}
    span.message__info__arrow.icon.icon__arrow.fas.fa-angle-double-right 
    span.message__info__user {{users[message.to].login}}
    button.message__info__button Spam
    button.message__info__button(@click="read(message)") Read
    button.message__info__button(v-if="message.type==='system'") 
      router-link(to="/settings") Settings
    button.message__info__button(v-if="message.type==='user-add'" @click="addfriend(users[message.from])") Add friend
    button.message__info__button(v-if="message.type==='group-add'" @click="groupfollow(groups[message.groupId])") Group follow
    button.message__info__button(v-if="message.type==='user'") Answer    
  p.message__text {{message.body}}
  p.message__status 
    span.message__status__read
      b(v-if="message.read") read
      span(v-else) unread
    span.message__status__useradd
      b(v-if="adduserflag&&message.type==='user-add'") This user @{{users[message.from].login}} success added
      span(v-if="!adduserflag&&message.type==='user-add'") @{{users[message.from].login}} to friend
    span.message__status__useradd
      b(v-if="addgroupflag&&message.type==='group-add'") This group @{{groups[message.groupId].name}} success added
      span(v-if="!addgroupflag&&message.type==='group-add'") @{{groups[message.groupId].name}} to follow
</template>
<script>
export default {
  props:{
    users: {
      type:Array,
      required:true    
    },
    message: {
      type:Object,
      required: true       
    },
    groups: {
      type: Array,
      required:true    
    }   
  },
  data() {
    return {
      adduserflag:false,
      addgroupflag:false    
    }
  },
  methods: {
    read(message) {
      this.$store.dispatch("readmessage",message);    
    },
    addfriend(user) {
      this.adduserflag=true;
      this.$store.dispatch("addfriend",user);      
    },
    groupfollow(group) {    
      this.addgroupflag=true;
      this.$store.dispatch("groupfollow",group);
    }  
  }

}
</script>