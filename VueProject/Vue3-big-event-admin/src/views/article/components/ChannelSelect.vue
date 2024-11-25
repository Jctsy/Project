<script setup>
import { artGetChannelsService } from '@/api/article'
import { ref } from 'vue'

defineProps({
    modelValue: {
        type: [Number, String]
    },
    width: {
        type:String
    }
})

const emit = defineEmits(['update:modelValue'])

const channelList = ref([])
const getChannnelList = async () => {
    const res = await artGetChannelsService()
    channelList.value = res.data.data
    // console.log(channelList.value)    
}
getChannnelList()
</script>

<template>
    <!-- label 展示给用户看的 value 收集起来提交给后台的 -->
    <el-select 
    :modelValue="modelValue" 
    @update:modelValue="emit('update:modelValue', $event)" 
    :style="{ width }">
        <el-option 
        v-for="channel in channelList" 
        :key="channel.id"
        :label="channel.cate_name" 
        :value="channel.id">
    </el-option>
        <el-option label="体育" value="137"></el-option>
    </el-select>
</template>