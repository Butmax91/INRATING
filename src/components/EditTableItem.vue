<template>
    <tr>
        <td>
            <input type="text"  v-model="itemData.name" :disabled="!canBeEdited">
        </td>
        <td>
            <input type="text"  v-model="itemData.surname" :disabled="!canBeEdited">
        </td>
        <td>
            <input type="tel"  v-model="itemData.phone" :disabled="!canBeEdited">
        </td>
        <td>
            <input type="text"  v-model="itemData.email" :disabled="!canBeEdited">
        </td>
        <td>
            <button @click="some()">{{canBeEdited ? "save" : "edit"}}</button>
        </td>

    </tr>
</template>
<script>
    export default {
        props : ['item','index'],
        data(){
            return {
                canBeEdited : false,
                itemData : {
                    name:this.item.name,
                    surname:this.item.surname,
                    phone:this.item.phone,
                    email:this.item.email,
                }

            }
        },
        methods : {
            some(){
                this.canBeEdited  =  !this.canBeEdited;
                if(this.canBeEdited&& this.itemData.name && this.itemData.surname && this.itemData.phone && this.itemData.email){
                    this.$store.commit('editUser',{index:this.index,data:this.itemData})

                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    td{
        border: 1px solid #ddd;
        &:last-child{
            text-align: center;
        }
    }
    input{
        display: block;
        box-sizing: border-box;
        border:none;
        background: none;
        width: 100%;
        height: 100%;
        padding: 8px;
        text-align: center;
    }
    .active{
        border-bottom: 1px solid red;
    }

</style>