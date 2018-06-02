import {CustomHeaderComponent} from '../components/header/customHeader';
import {CustomSiderComponent} from '../components/siderBar/customSider';
import {BreadcrumbComponent} from '../components/breadcrumbs/breadcrumb';
import {BasicServerModalComponent} from '../components/modals/basicServerModal';
import {BasicCusServerModalComponent} from '../components/modals/basicCusServerModal';

import {AppHomeComponent} from '../components/appHome/appHome';
import {ButtonsComponent} from '../components/ui/buttons';
import {DropdownComponent} from '../components/ui/dropdown';
import {PaginationsComponent} from '../components/ui/paginations';
import {StepsComponent} from '../components/ui/steps';
import {AutocompletesComponent} from '../components/ui/autocompletes';
import {CascadersComponent} from '../components/ui/cascaders';
import {CheckboxesComponent} from '../components/ui/checkboxes';
import {DatePickersComponent} from '../components/ui/datePickers';
import {BasicFormsComponent} from '../components/forms/basicForms';
import {InputsComponent} from '../components/ui/inputs';
import {RadioComponent} from '../components/ui/radio';
import {RatesComponent} from '../components/ui/rates';
import {SelectRComponent} from '../components/ui/selectR';
import {SwitchRComponent} from '../components/ui/switchR';
import {CalendarRComponent} from '../components/ui/calendarR';
import {CarouselRComponent} from '../components/ui/carouselR';
import {PopoverComponent} from '../components/ui/popover';
import {BasicTablesComponent} from '../components/tables/basicTables';
import {SelectTablesComponent} from '../components/tables/selectTables';
import {SoTablesComponent} from '../components/tables/soTables';
import {SsTablesComponent} from '../components/tables/ssTables';
import {SeniorTablesComponent} from '../components/tables/seniorTables';
import {NestingTablesComponent} from '../components/tables/nestingTables';
import {InternationalizationExamplesComponent} from '../components/internationalizations/internationalizationExamples';
import {ViserChartsComponent} from '../components/charts/viserCharts';
import {WordCloudComponent} from '../components/charts/wordCloud';
import {BasicModalComponent} from '../components/modals/basicModal';
import {QuillIndexComponent} from '../components/richText/quillIndex';
import {CkeditorIndexComponent} from '../components/richText/ckeditorIndex';

const coms = {
  CustomHeaderComponent,
  CustomSiderComponent,
  BreadcrumbComponent,
  BasicServerModalComponent,
  BasicCusServerModalComponent,
  AppHomeComponent,
  ButtonsComponent,
  DropdownComponent,
  PaginationsComponent,
  StepsComponent,
  AutocompletesComponent,
  CascadersComponent,
  CheckboxesComponent,
  DatePickersComponent,
  BasicFormsComponent,
  InputsComponent,
  RadioComponent,
  RatesComponent,
  SelectRComponent,
  SwitchRComponent,
  CalendarRComponent,
  CarouselRComponent,
  PopoverComponent,
  BasicTablesComponent,
  SelectTablesComponent,
  SoTablesComponent,
  SsTablesComponent,
  SeniorTablesComponent,
  NestingTablesComponent,
  InternationalizationExamplesComponent,
  ViserChartsComponent,
  WordCloudComponent,
  BasicModalComponent,
  QuillIndexComponent,
  CkeditorIndexComponent
};

const importComs = [
  CustomHeaderComponent,
  CustomSiderComponent,
  BreadcrumbComponent,
  BasicServerModalComponent,
  BasicCusServerModalComponent,
  AppHomeComponent,
  ButtonsComponent,
  DropdownComponent,
  PaginationsComponent,
  StepsComponent,
  AutocompletesComponent,
  CascadersComponent,
  CheckboxesComponent,
  DatePickersComponent,
  BasicFormsComponent,
  InputsComponent,
  RadioComponent,
  RatesComponent,
  SelectRComponent,
  SwitchRComponent,
  CalendarRComponent,
  CarouselRComponent,
  PopoverComponent,
  BasicTablesComponent,
  SelectTablesComponent,
  SoTablesComponent,
  SsTablesComponent,
  SeniorTablesComponent,
  NestingTablesComponent,
  InternationalizationExamplesComponent,
  ViserChartsComponent,
  WordCloudComponent,
  BasicModalComponent,
  QuillIndexComponent,
  CkeditorIndexComponent
];

const appHome = {name: '/cus/home/index', url: '/cus/home/index', component: AppHomeComponent};
const buttons = {name: '/cus/ui/buttons', url: '/cus/ui/buttons', component: ButtonsComponent};
const dropdown = {name: '/cus/ui/dropdown', url: '/cus/ui/dropdown', component: DropdownComponent};
const paginations = {name: '/cus/ui/paginations', url: '/cus/ui/paginations', component: PaginationsComponent};
const steps = {name: '/cus/ui/steps', url: '/cus/ui/steps', component: StepsComponent};
const autocompletes = {name: '/cus/ui/autocompletes', url: '/cus/ui/autocompletes', component: AutocompletesComponent};
const cascaders = {name: '/cus/ui/cascaders', url: '/cus/ui/cascaders', component: CascadersComponent};
const checkbox = {name: '/cus/ui/checkbox', url: '/cus/ui/checkbox', component: CheckboxesComponent};
const datePickers = {name: '/cus/ui/datePickers', url: '/cus/ui/datePickers', component: DatePickersComponent};
const inputs = {name: '/cus/ui/inputs', url: '/cus/ui/inputs', component: InputsComponent};
const radio = {name: '/cus/ui/radio', url: '/cus/ui/radio', component: RadioComponent};
const rate = {name: '/cus/ui/rate', url: '/cus/ui/rate', component: RatesComponent};
const select = {name: '/cus/ui/select', url: '/cus/ui/select', component: SelectRComponent};
const switchR = {name: '/cus/ui/switch', url: '/cus/ui/switch', component: SwitchRComponent};
const calendarR = {name: '/cus/ui/calendarR', url: '/cus/ui/calendarR', component: CalendarRComponent};
const carouselR = {name: '/cus/ui/carouselR', url: '/cus/ui/carouselR', component: CarouselRComponent};
const popover = {name: '/cus/ui/popover', url: '/cus/ui/popover', component: PopoverComponent};

const basicForms = {name: '/cus/form/basic', url: '/cus/form/basic', component: BasicFormsComponent};

const basicTables = {name: '/cus/tables/basic', url: '/cus/tables/basic', component: BasicTablesComponent};
const selectTables = {name: '/cus/tables/select', url: '/cus/tables/select', component: SelectTablesComponent};
const soselectTables = {name: '/cus/tables/soselect', url: '/cus/tables/soselect', component: SoTablesComponent};
const ssselectTables = {name: '/cus/tables/ssselect', url: '/cus/tables/ssselect', component: SsTablesComponent};
const seniorTables = {name: '/cus/tables/senior', url: '/cus/tables/senior', component: SeniorTablesComponent};
const nestingTables = {name: '/cus/tables/nestingTables', url: '/cus/tables/nestingTables', component: NestingTablesComponent};

const internationalizations = {name: '/cus/internationalization/examples', url: '/cus/internationalization/examples', component: InternationalizationExamplesComponent};

const g2 = {name: '/cus/chart/viser', url: '/cus/chart/viser', component: ViserChartsComponent};
const wordCloud = {name: '/cus/chart/wordCloud', url: '/cus/chart/wordCloud', component: WordCloudComponent};

const basicModal = {name: '/cus/modals/basic', url: '/cus/modals/basic', component: BasicModalComponent};

const quillIndex = {name: '/cus/richText/quillIndex', url: '/cus/richText/quillIndex', component: QuillIndexComponent};
const ckeditorIndex = {name: '/cus/richText/ckeditorIndex', url: '/cus/richText/ckeditorIndex', component: CkeditorIndexComponent};

const uiRouterContents = [
  appHome,
  buttons,
  dropdown,
  paginations,
  steps,
  autocompletes,
  cascaders,
  checkbox,
  datePickers,
  basicForms,
  inputs,
  radio,
  rate,
  select,
  switchR,
  calendarR,
  carouselR,
  popover,
  basicTables,
  selectTables,
  soselectTables,
  ssselectTables,
  seniorTables,
  nestingTables,
  internationalizations,
  g2,
  wordCloud,
  basicModal,
  quillIndex,
  ckeditorIndex
];

const uiRouterContentsObject = {
  appHome,
  buttons,
  dropdown,
  paginations,
  steps,
  autocompletes,
  cascaders,
  checkbox,
  datePickers,
  basicForms,
  inputs,
  radio,
  rate,
  select,
  switchR,
  calendarR,
  carouselR,
  popover,
  basicTables,
  selectTables,
  soselectTables,
  ssselectTables,
  seniorTables,
  nestingTables,
  internationalizations,
  g2,
  wordCloud,
  basicModal,
  quillIndex,
  ckeditorIndex
};

export {coms, importComs, uiRouterContents, uiRouterContentsObject};
