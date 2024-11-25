<script setup>
import { artDelChannelService, artGetChannelsService } from '@/api/article';
import { ref } from 'vue'
import { Edit, Delete} from '@element-plus/icons-vue'
import emptyImg from '@/assets/empty.png'
import ChannelEdit from './components/ChannelEdit.vue';
import { ElMessage } from 'element-plus';
const channelList = ref([])

const loading = ref(false)
const dialog = ref()

const getChannelList = async () => {
    loading.value = true
    const res = await artGetChannelsService()
    channelList.value = res.data.data
    // channelList.value = []
    loading.value = false
    // console.log(channelList.value);
    
}
getChannelList()

const onDelChannel = async (row) => {
    await ElMessageBox.confirm('你确定要删除该分类么', '温馨提示', {
        type: 'Warning',
        confirmButtonText: '确认',
        cancelButtonText: '取消'
    })
    await artDelChannelService(row.id)
    ElMessage.success('删除成功')
    getChannelList() 
    
}
const onEditChannel = (row) => {
    dialog.value.open({row})    
}
const onAddChannel = () => {
    dialog.value.open({})
}
const onSuccess = () => {
    getChannelList()
}
</script>
<template>
    <page-container title="文章分类">
        <template #extra>
            <el-button @click="onAddChannel">添加分类</el-button>
        </template>
        
        <el-table v-loading="loading" :data="channelList" style="width:100%">
            <el-table-column type="index" label="序号" width="100%"></el-table-column>
            <el-table-column prop="cate_name" label="分类名称"></el-table-column>
            <el-table-column prop="cate_alias" label="分类别名"></el-table-column>
            <el-table-column label="操作" width="100%">
                <!-- row 就是 channelList的每一项 $index 下标 -->
                <template #default="{ row, $index }">
                    <el-button type="primary" :icon="Edit" circle plain @click="onEditChannel(row, $index)"></el-button>
                    <el-button type="danger" :icon="Delete" circle plain @click="onDelChannel(row, $index)"></el-button>
                </template>
            </el-table-column>
            <template #empty>
                <!-- <el-empty image="@/assets/empty.png" description="没有数据"></el-empty> -->
                <!-- @/assets/empty.png -->
                <!-- https://zidian.yw11.com/rundata/xing2/7a7a.jpg -->
                <!-- description ="没有数据" -->
                <el-empty
                    :image="emptyImg"
                    :image-size="250"
                />
            </template>
        </el-table>

        <channel-edit ref="dialog" @success="onSuccess"></channel-edit>
    </page-container>
</template>

<style lang="scss"></style>