<template>
  <div id="outer">
    <!-- <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'js' }" /> -->
    <!-- <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'vuejs' }" /> -->
    <!-- <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'node-js' }" /> -->

    <div class="text-left">
      <a href="https://github.com/nikalsh">
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'github-square' }" /> </a>
      <a href="https://www.linkedin.com/in/niklas-helander-b1ba8a16b/">
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }" /></a>
    </div> 
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#outer {
  
}
.fa-w-14 {
  /* padding: 20px; */
  font-size: 35px;
  /* text-align: center; */
  /* text-decoration: none;  */
  transition: all 0.1s ease-in-out;
  cursor: pointer;
}
.fa-w-14:hover {
  opacity: 0.7;
  transform: scale(1.05, 1.05);
}

.fa-js.fa-w-14 {
  color: #f7df1e;
  /* background-color: black; */
}
.fa-vuejs.fa-w-14 {
  color: #42b883;
  /* background-color: black; */
}
.fa-vuejs.fa-w-14 {
  color: #42b883;
  /* background-color: black; */
}
.fa-github-square {
  color: black;
  /* background-color: black; */
}
.fa-linkedin {
  color: #0077b5;
}
</style>
