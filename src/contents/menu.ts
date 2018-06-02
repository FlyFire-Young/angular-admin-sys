export class Menu {
  key: string;
  title: string;
  icon: string;
  checkOpen: boolean;
  sub: SubMenu[];
}

export class SubMenu {
  key: string;
  title: string;
  icon: string;
  checkOpen: boolean;
}

export const menusContent: Menu[] = [
  {key: '/cus/home/index', title: '首页', icon: 'anticon anticon-home', checkOpen: false, sub: []},
  {
    key: '/cus/ui', title: 'UI', icon: 'anticon anticon-appstore', checkOpen: false,
    sub: [
      {key: '/cus/ui/buttons', title: 'Button 按钮', icon: '', checkOpen: false},
      {key: '/cus/ui/dropdown', title: 'Dropdown 下拉菜单', icon: '', checkOpen: false},
      {key: '/cus/ui/paginations', title: 'Pagination 分页', icon: '', checkOpen: false},
      {key: '/cus/ui/steps', title: 'Steps 步骤条', icon: '', checkOpen: false},
      {key: '/cus/ui/autocompletes', title: 'Autocomplete 自动完成', icon: '', checkOpen: false},
      // {key: '/cus/ui/cascaders', title: 'Cascader 级联选择', icon: '', checkOpen: false},
      {key: '/cus/ui/checkbox', title: 'Checkbox 多选框', icon: '', checkOpen: false},
      // {key: '/cus/ui/datePickers', title: 'DatePicker 日期选择框', icon: '', checkOpen: false},
      {key: '/cus/ui/inputs', title: 'Input 输入框', icon: '', checkOpen: false},
      {key: '/cus/ui/radio', title: 'Radio 单选框', icon: '', checkOpen: false},
      {key: '/cus/ui/rate', title: 'Rate 评分', icon: '', checkOpen: false},
      {key: '/cus/ui/select', title: 'Select 选择器', icon: '', checkOpen: false},
      {key: '/cus/ui/switch', title: 'Switch 开关', icon: '', checkOpen: false},
      // {key: '/cus/ui/calendarR', title: 'Calendar 日历', icon: '', checkOpen: false},
      {key: '/cus/ui/carouselR', title: 'Carousel 走马灯', icon: '', checkOpen: false},
      {key: '/cus/ui/popover', title: 'Popover 气泡卡片', icon: '', checkOpen: false},

    ],
  },
  // {
  //   key: '/cus/form', title: '表单', icon: 'anticon anticon-shop', checkOpen: false,
  //   sub: [
  //     {key: '/cus/form/basic', title: '基本表单', icon: '', checkOpen: false},
  //   ],
  // },
  {
    key: '/cus/tables', title: '表格', icon: 'anticon anticon-switcher', checkOpen: false,
    sub: [
      {key: '/cus/tables/basic', title: '基本表格', icon: '', checkOpen: false},
      {key: '/cus/tables/select', title: '可选择表格', icon: '', checkOpen: false},
      {key: '/cus/tables/soselect', title: '选择和操作表格', icon: '', checkOpen: false},
      {key: '/cus/tables/ssselect', title: '筛选和排序表格', icon: '', checkOpen: false},
      {key: '/cus/tables/nestingTables', title: '嵌套子表格', icon: '', checkOpen: false},
      {key: '/cus/tables/senior', title: '高级表格', icon: '', checkOpen: false},
    ],
  },
  {
    key: '/cus/chart', title: '图表', icon: 'anticon anticon-book', checkOpen: false,
    sub: [
      {key: '/cus/chart/viser', title: 'viser图表', icon: '', checkOpen: false},
      {key: '/cus/chart/wordCloud', title: '词云', icon: '', checkOpen: false},
    ],
  },
  {
    key: '/cus/modals', title: '弹出框', icon: 'anticon anticon-star-o', checkOpen: false,
    sub: [
      {key: '/cus/modals/basic', title: '基本弹出框', icon: '', checkOpen: false},
    ],
  },
  {
    key: '/cus/richText', title: '富文本编辑器', icon: 'anticon anticon-edit', checkOpen: false,
    sub: [
      {key: '/cus/richText/quillIndex', title: 'quill 编辑器', icon: '', checkOpen: false},
      {key: '/cus/richText/ckeditorIndex', title: 'ckeditor 编辑器', icon: '', checkOpen: false},
    ],
  },
  // {
  //   key: '/cus/internationalization', title: '国际化', icon: 'anticon anticon-tag-o', checkOpen: false,
  //   sub: [
  //     {key: '/cus/internationalization/examples', title: '示例', icon: '', checkOpen: false},
  //   ],
  // },
];
