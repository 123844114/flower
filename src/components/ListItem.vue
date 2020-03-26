<template>
    <dl class="item-list">
        <dt><img :src="flowerItem.Image" alt="" v-if="flowerItem.Image"></dt>
        <dd>
            <p>{{flowerItem.Name}}</p>
            <p>￥{{flowerItem.Price}}</p>
            <p>销售量：{{flowerItem.Sales}}</p>
        </dd>
    </dl>
</template>

<script>
export default {
props:['flowerItem']
}
</script>

<style scoped lang="scss">
.item-list{
 display: flex;
 dt{
     width: 30%;
     img{
         width:100%
     }
 }
 dd{
     flex: 1
 }
}
</style>
