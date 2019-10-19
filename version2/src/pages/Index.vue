<template>
  <Layout>
    <h1>{{$page.metadata.siteName}}</h1>
  </Layout>
</template>

<page-query>
query {
  metadata {
    siteName
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: `Home`
  }
};
</script>

<style>
</style>
