<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="create_time"
        :label="$t('time')"
        
        align="center">
          <template slot-scope="scope">
            <el-date-picker 
              v-model="formData.create_time"
              align="right"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions"
              value-format="yyyy-MM-dd"
              v-if="scope.$index == 0" >
            </el-date-picker>
            <span v-else>{{scope.row.create_time}}</span>
          </template>
      </el-table-column>
      <el-table-column
        prop="user"
        :label="$t('user')"
        
        align="center">
        <template slot-scope="scope">
          <el-input v-model="formData.user" placeholder="请输入内容" v-if="scope.$index == 0"></el-input>
          <span v-else>{{scope.row.user}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="amount"
        :label="$t('amount')"
        
        align="center">
        <template slot-scope="scope">
          <el-input v-model="formData.amount" placeholder="请输入内容" v-if="scope.$index == 0"></el-input>
          <span v-else>{{scope.row.amount}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="category"
        :label="$t('category')"
        align="center">
        <template slot-scope="scope">
          <el-input v-model="formData.category" placeholder="请输入内容" v-if="scope.$index == 0"></el-input>
          <span v-else>{{scope.row.category}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="remark"
        :label="$t('remark')"
        align="center">
        <template slot-scope="scope">
          <el-input v-model="formData.remark" placeholder="请输入内容" v-if="scope.$index == 0"></el-input>
          <span v-else>{{scope.row.remark}}</span>
        </template>
      </el-table-column>
      <el-table-column
      label="操作"
      width="200"
      align="center">
      <template slot-scope="scope">
        <el-button type="success" @click="add"  v-if="scope.$index == 0">{{$t('add')}}</el-button>
        <div v-else style="">
          <el-button  size="small" >{{$t('edit')}}</el-button>
          <el-button @click="handleClick(scope.row)" type="danger" size="small" >{{$t('delete')}}</el-button>
        </div>
        
        
      </template>
    </el-table-column>
    </el-table>
    
  </div>
</template>

<script>
export default {
    data() {
            return {
                tableData: [],
                addTemp:{
                  date:'',
                  name:'1',

                },
                pickerOptions: {
                  disabledDate(time) {
                    return time.getTime() > Date.now();
                  },
                  shortcuts: [{
                    text: '今天',
                    onClick(picker) {
                      picker.$emit('pick', new Date());
                    }
                  }, {
                    text: '昨天',
                    onClick(picker) {
                      const date = new Date();
                      date.setTime(date.getTime() - 3600 * 1000 * 24);
                      picker.$emit('pick', date);
                    }
                  }, {
                    text: '一周前',
                    onClick(picker) {
                      const date = new Date();
                      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                      picker.$emit('pick', date);
                    }
                  }]
                },
                formData:{
                  create_time:'',
                  name:""
                }
            }
    },
    methods: {
      handleClick(row) {
        console.log(row);
      },
      add(){
        this.$db.addIncome(this.formData)
        this.reload()
      },
      reload(){
        this.tableData = this.$db.select('income')
        console.log(this.tableData,'1111')
        this.tableData.unshift(this.addTemp)
      }
      
    },
    mounted(){
      
      this.reload()
    }
}
</script>

<style>

</style>