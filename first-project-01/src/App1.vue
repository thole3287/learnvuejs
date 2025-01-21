<script setup>
 const message = 'Hello Vue 3.0';
 const rawHtml = '<span style="color: red">This should be red.</span>'
 const buttonId = 'button-id';
 const classbtn = 'btn btn-primary';
  const disabled = false;
  const vBind = {
    id: 'button-id',
    class: 'btn btn-primary1',
    disabled: false
  };
  const listString= 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z';
  const converttoid =(data) => data.split(',').reverse().join('-');
  const attributeName = 'href';
  const url = 'https://www.google.com';
</script>

<template>
<h1>test</h1>
<span >{{ message }}</span>
<button :id="buttonId" :class="classbtn" :disabled="disabled">Click here</button>
<button v-bind="vBind">Click here</button>
<button :id="converttoid(listString)">Click here 3</button>
<a v-bind:[attributeName]="url">click here</a>
<!-- <p><span v-html="rawHtml"></span></p> -->

</template>

<style scoped>

</style>
