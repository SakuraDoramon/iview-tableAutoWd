<template>
  <div style="padding: 24px;">
    <table-auto :columns="columns" :data="data" border height="500"></table-auto>
  </div>
</template>

<script>
import tableAuto from '../components/tableAuto'
export default {
  components: { tableAuto },
  data () {
    return {
      columns: [
        { type: 'selection', key: 'selection', width: 60, align: 'center' },
        {
            title: 'Name',
            key: 'name',
            resizable: true,
        },
        {
            title: 'Age',
            key: 'age',
            resizable: true,
            minWidth: 100
        },
        {
            title: 'Address',
            key: 'address',
            resizable: true
        },
        {
          title: 'Action',
          key: 'action',
          width: 150,
          align: 'center',
          fixed: 'right',
          render: (h, params) => {
            return h('div', [
                h('Button', {
                    props: {
                        type: 'primary',
                        size: 'small'
                    },
                    style: {
                        marginRight: '5px'
                    }
                }, '查看'),
                h('Button', {
                    props: {
                        type: 'error',
                        size: 'small'
                    }
                }, '删除')
            ])
          }
        }
      ],
      data: [
        {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
        },
        {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
        },
        {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
        },
        {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
