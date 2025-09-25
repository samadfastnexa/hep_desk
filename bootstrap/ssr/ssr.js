import { createSSRApp, h as h$1 } from "vue";
import { renderToString } from "@vue/server-renderer";
import { createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { i18nVue } from "laravel-vue-i18n";
const Dashboard$e = "ড্যাশবোর্ড";
const Logout$e = "লগআউট";
const Tickets$e = "টিকিট";
const Chat$e = "চ্যাট";
const FAQs$e = "প্রশ্নোত্তর";
const Blog$e = "ব্লগ";
const More$e = "আরও";
const Notes$e = "নোট";
const Contacts$e = "যোগাযোগ";
const Organizations$e = "প্রতিষ্ঠান";
const Users$e = "ব্যবহারকারীরা";
const Customers$e = "গ্রাহকরা";
const Settings$e = "সেটিংস";
const Global$e = "গ্লোবাল";
const Categories$e = "শ্রেণীসমূহ";
const Status$e = "অবস্থা";
const Priorities$e = "অগ্রাধিকার";
const Departments$e = "বিভাগসমূহ";
const Types$e = "ধরন";
const Pusher$e = "পুশার";
const Contact$e = "যোগাযোগ";
const Services$e = "সেবা";
const Filter$e = "ফিল্টার";
const Trashed$e = "মুছে ফেলা";
const Reset$e = "পুনরায় সেট করুন";
const Name$e = "নাম";
const Email$e = "ইমেইল";
const Phone$e = "ফোন";
const Country$e = "দেশ";
const City$e = "শহর";
const Address$e = "ঠিকানা";
const Password$e = "পাসওয়ার্ড";
const Role$e = "ভূমিকা";
const Photo$e = "ছবি";
const Technical$e = "প্রযুক্তিগত";
const Hardware$e = "হার্ডওয়্যার";
const Development$e = "উন্নয়ন";
const Management$e = "ব্যবস্থাপনা";
const Admin$e = "অ্যাডমিন";
const Software$e = "সফটওয়্যার";
const Service$e = "সেবা";
const Event$e = "ইভেন্ট";
const Average$e = "গড়";
const Seconds$e = "সেকেন্ড";
const Month$e = "মাস";
const Months$e = "মাসসমূহ";
const Day$e = "দিন";
const Days$e = "দিনসমূহ";
const Hours$e = "ঘণ্টা";
const Hour$e = "ঘণ্টা";
const Minutes$e = "মিনিট";
const Minute$e = "মিনিট";
const Key$e = "কি";
const Subject$e = "বিষয়";
const Priority$e = "অগ্রাধিকার";
const Updated$e = "আপডেট করা হয়েছে";
const Customer$e = "গ্রাহক";
const Department$e = "বিভাগ";
const Category$e = "শ্রেণী";
const Created$e = "তৈরি করা হয়েছে";
const Save$e = "সংরক্ষণ করুন";
const Ticket$e = "টিকিট";
const FAQ$e = "প্রশ্নোত্তর";
const Title$e = "শিরোনাম";
const Details$e = "বিস্তারিত";
const Note$e = "নোট";
const Submit$e = "জমা দিন";
const Cancel$e = "বাতিল করুন";
const Organization$e = "প্রতিষ্ঠান";
const Province$e = "প্রদেশ";
const State$e = "রাজ্য";
const Delete$e = "মুছুন";
const Update$e = "আপডেট করুন";
const Create$e = "তৈরি করুন";
const Location$e = "অবস্থান";
const Privacy$e = "গোপনীয়তা";
const Company$e = "কোম্পানি";
const Subscribe$e = "সাবস্ক্রাইব";
const Login$e = "লগইন";
const Hello$e = "হ্যালো";
const Registration$e = "নিবন্ধন";
const bd = {
  "Edit Profile": "প্রোফাইল সম্পাদনা করুন",
  Dashboard: Dashboard$e,
  Logout: Logout$e,
  Tickets: Tickets$e,
  Chat: Chat$e,
  FAQs: FAQs$e,
  Blog: Blog$e,
  "Knowledge Base": "জ্ঞানভিত্তিক তথ্য",
  More: More$e,
  Notes: Notes$e,
  Contacts: Contacts$e,
  Organizations: Organizations$e,
  Users: Users$e,
  Customers: Customers$e,
  Settings: Settings$e,
  Global: Global$e,
  Categories: Categories$e,
  Status: Status$e,
  Priorities: Priorities$e,
  Departments: Departments$e,
  Types: Types$e,
  "Email Templates": "ইমেইল টেমপ্লেট",
  "SMTP Mail": "SMTP মেইল",
  Pusher: Pusher$e,
  "Pusher Chat": "পুশার চ্যাট",
  "Front Pages": "সামনের পৃষ্ঠাসমূহ",
  Contact: Contact$e,
  Services: Services$e,
  "Privacy Policy": "গোপনীয়তা নীতি",
  "Terms of Services": "পরিষেবার শর্তাবলী",
  Filter: Filter$e,
  Trashed: Trashed$e,
  "Trashed With": "মুছে ফেলা সহ",
  "Only Trashed": "শুধুমাত্র মুছে ফেলা",
  "Search...": "অনুসন্ধান...",
  Reset: Reset$e,
  Name: Name$e,
  Email: Email$e,
  Phone: Phone$e,
  Country: Country$e,
  "Create User": "ব্যবহারকারী তৈরি করুন",
  "First Name": "প্রথম নাম",
  "First name": "প্রথম নাম",
  "Last Name": "শেষ নাম",
  "Last name": "শেষ নাম",
  City: City$e,
  Address: Address$e,
  Password: Password$e,
  Role: Role$e,
  Photo: Photo$e,
  "New Tickets": "নতুন টিকিট",
  "Open Tickets": "খোলা টিকিট",
  "Closed Tickets": "বন্ধ টিকিট",
  "Unassigned Tickets": "অবর্দিষ্ট টিকিট",
  "Ticket by department": "বিভাগ অনুযায়ী টিকিট",
  "Ticket by type": "ধরন অনুযায়ী টিকিট",
  "Top ticket creator": "শীর্ষ টিকিট নির্মাতা",
  "Ticket history": "টিকিট ইতিহাস",
  "First Response Time": "প্রথম প্রতিক্রিয়া সময়",
  "Last Response Time": "সর্বশেষ প্রতিক্রিয়া সময়",
  Technical: Technical$e,
  Hardware: Hardware$e,
  Development: Development$e,
  Management: Management$e,
  Admin: Admin$e,
  Software: Software$e,
  Service: Service$e,
  Event: Event$e,
  Average: Average$e,
  Seconds: Seconds$e,
  "this month": "এই মাস",
  "last month": "গত মাস",
  Month: Month$e,
  Months: Months$e,
  Day: Day$e,
  Days: Days$e,
  Hours: Hours$e,
  Hour: Hour$e,
  Minutes: Minutes$e,
  Minute: Minute$e,
  Key: Key$e,
  Subject: Subject$e,
  "Attach files": "ফাইল সংযুক্ত করুন",
  Priority: Priority$e,
  "Date": "তারিখ",
  Updated: Updated$e,
  Customer: Customer$e,
  Department: Department$e,
  "Assigned to": "নির্ধারিত",
  "Ticket type": "টিকিট ধরন",
  Category: Category$e,
  Created: Created$e,
  "Request Details": "অনুরোধের বিবরণ",
  "Attach File": "ফাইল সংযুক্ত করুন",
  "Delete Ticket": "টিকিট মুছুন",
  Save: Save$e,
  "Ticket discussion": "টিকিট আলোচনা",
  Ticket: Ticket$e,
  FAQ: FAQ$e,
  "Create Ticket": "টিকিট তৈরি করুন",
  "New Ticket": "নতুন টিকিট",
  "Create FAQ": "প্রশ্নোত্তর তৈরি করুন",
  "Filter by priority": "অগ্রাধিকারের মাধ্যমে ফিল্টার করুন",
  "Filter by status": "অবস্থার মাধ্যমে ফিল্টার করুন",
  "Delete FAQ": "প্রশ্নোত্তর মুছুন",
  Title: Title$e,
  Details: Details$e,
  Note: Note$e,
  Submit: Submit$e,
  Cancel: Cancel$e,
  "Delete note": "নোট মুছুন",
  Organization: Organization$e,
  Province: Province$e,
  State: State$e,
  "Postal code": "পোস্টাল কোড",
  "Delete Organization": "প্রতিষ্ঠান মুছুন",
  "Update Organization": "প্রতিষ্ঠান আপডেট করুন",
  Delete: Delete$e,
  Update: Update$e,
  Create: Create$e,
  "Create Customer": "গ্রাহক তৈরি করুন",
  "Manage Users": "ব্যবহারকারী পরিচালনা করুন",
  "Default Language": "ডিফল্ট ভাষা",
  "Email Notifications": "ইমেইল বিজ্ঞপ্তি",
  "Create ticket by new customer": "নতুন গ্রাহকের দ্বারা টিকিট তৈরি করুন",
  "Create ticket from dashboard": "ড্যাশবোর্ড থেকে টিকিট তৈরি করুন",
  "Status or priority changes": "অবস্থা বা অগ্রাধিকার পরিবর্তন",
  "Create a new user": "নতুন ব্যবহারকারী তৈরি করুন",
  "Email Template": "ইমেইল টেমপ্লেট",
  "SMTP Host": "SMTP হোস্ট",
  "SMTP Port": "SMTP পোর্ট",
  "SMTP Username": "SMTP ব্যবহারকারীর নাম",
  "SMTP Password": "SMTP পাসওয়ার্ড",
  Location: Location$e,
  "Phone number": "ফোন নম্বর",
  "Email address": "ইমেইল ঠিকানা",
  "Add New": "নতুন যোগ করুন",
  Privacy: Privacy$e,
  Company: Company$e,
  Subscribe: Subscribe$e,
  Login: Login$e,
  "Submit ticket": "টিকিট জমা দিন",
  "terms and conditions": "শর্তাবলী এবং শর্তসমূহ",
  "I agree with the": "আমি এর সাথে সম্মত",
  "Don’t have account?": "অ্যাকাউন্ট নেই?",
  "Remember Me": "আমাকে মনে রাখবেন",
  "Reset Password": "পাসওয়ার্ড পুনরায় সেট করুন",
  "Already have an account?": "ইতিমধ্যে একটি অ্যাকাউন্ট আছে?",
  "Good Morning": "সুপ্রভাত",
  "Good Noon": "শুভ মধ্যাহ্ন",
  "Good Evening": "শুভ সন্ধ্যা",
  "Good Afternoon": "শুভ অপরাহ্ন",
  Hello: Hello$e,
  "Forgot your password?": "আপনার পাসওয়ার্ড ভুলে গেছেন?",
  "Send Password Reset Link": "পাসওয়ার্ড পুনরায় সেট করার লিংক পাঠান",
  Registration: Registration$e
};
const __vite_glob_1_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Address: Address$e,
  Admin: Admin$e,
  Average: Average$e,
  Blog: Blog$e,
  Cancel: Cancel$e,
  Categories: Categories$e,
  Category: Category$e,
  Chat: Chat$e,
  City: City$e,
  Company: Company$e,
  Contact: Contact$e,
  Contacts: Contacts$e,
  Country: Country$e,
  Create: Create$e,
  Created: Created$e,
  Customer: Customer$e,
  Customers: Customers$e,
  Dashboard: Dashboard$e,
  Day: Day$e,
  Days: Days$e,
  Delete: Delete$e,
  Department: Department$e,
  Departments: Departments$e,
  Details: Details$e,
  Development: Development$e,
  Email: Email$e,
  Event: Event$e,
  FAQ: FAQ$e,
  FAQs: FAQs$e,
  Filter: Filter$e,
  Global: Global$e,
  Hardware: Hardware$e,
  Hello: Hello$e,
  Hour: Hour$e,
  Hours: Hours$e,
  Key: Key$e,
  Location: Location$e,
  Login: Login$e,
  Logout: Logout$e,
  Management: Management$e,
  Minute: Minute$e,
  Minutes: Minutes$e,
  Month: Month$e,
  Months: Months$e,
  More: More$e,
  Name: Name$e,
  Note: Note$e,
  Notes: Notes$e,
  Organization: Organization$e,
  Organizations: Organizations$e,
  Password: Password$e,
  Phone: Phone$e,
  Photo: Photo$e,
  Priorities: Priorities$e,
  Priority: Priority$e,
  Privacy: Privacy$e,
  Province: Province$e,
  Pusher: Pusher$e,
  Registration: Registration$e,
  Reset: Reset$e,
  Role: Role$e,
  Save: Save$e,
  Seconds: Seconds$e,
  Service: Service$e,
  Services: Services$e,
  Settings: Settings$e,
  Software: Software$e,
  State: State$e,
  Status: Status$e,
  Subject: Subject$e,
  Submit: Submit$e,
  Subscribe: Subscribe$e,
  Technical: Technical$e,
  Ticket: Ticket$e,
  Tickets: Tickets$e,
  Title: Title$e,
  Trashed: Trashed$e,
  Types: Types$e,
  Update: Update$e,
  Updated: Updated$e,
  Users: Users$e,
  default: bd
}, Symbol.toStringTag, { value: "Module" }));
const Dashboard$d = "仪表板";
const Logout$d = "退出登录";
const Tickets$d = "工单";
const Chat$d = "聊天";
const FAQs$d = "常见问题";
const Blog$d = "博客";
const More$d = "更多";
const Notes$d = "笔记";
const Contacts$d = "联系人";
const Organizations$d = "组织";
const Users$d = "用户";
const Customers$d = "客户";
const Settings$d = "设置";
const Global$d = "全局";
const Categories$d = "类别";
const Status$d = "状态";
const Priorities$d = "优先级";
const Departments$d = "部门";
const Types$d = "类型";
const Pusher$d = "推送";
const Contact$d = "联系";
const Services$d = "服务";
const Filter$d = "筛选";
const Trashed$d = "已删除";
const Reset$d = "重置";
const Name$d = "姓名";
const Email$d = "电子邮件";
const Phone$d = "电话";
const Country$d = "国家";
const City$d = "城市";
const Address$d = "地址";
const Password$d = "密码";
const Role$d = "角色";
const Photo$d = "照片";
const Technical$d = "技术";
const Hardware$d = "硬件";
const Development$d = "开发";
const Management$d = "管理";
const Admin$d = "管理员";
const Software$d = "软件";
const Service$d = "服务";
const Event$d = "事件";
const Average$d = "平均";
const Seconds$d = "秒";
const Month$d = "月份";
const Months$d = "月份";
const Day$d = "天";
const Days$d = "天数";
const Hours$d = "小时";
const Hour$d = "小时";
const Minutes$d = "分钟";
const Minute$d = "分钟";
const Key$d = "键值";
const Subject$d = "主题";
const Priority$d = "优先级";
const Updated$d = "已更新";
const Customer$d = "客户";
const Department$d = "部门";
const Category$d = "类别";
const Created$d = "已创建";
const Save$d = "保存";
const Ticket$d = "工单";
const FAQ$d = "常见问题";
const Title$d = "标题";
const Details$d = "详情";
const Note$d = "备注";
const Submit$d = "提交";
const Cancel$d = "取消";
const Organization$d = "组织";
const Province$d = "省份";
const State$d = "州";
const Delete$d = "删除";
const Update$d = "更新";
const Create$d = "创建";
const Location$d = "位置";
const Privacy$d = "隐私";
const Company$d = "公司";
const Subscribe$d = "订阅";
const Login$d = "登录";
const Hello$d = "你好";
const Registration$d = "注册";
const cn = {
  "Edit Profile": "编辑个人资料",
  Dashboard: Dashboard$d,
  Logout: Logout$d,
  Tickets: Tickets$d,
  Chat: Chat$d,
  FAQs: FAQs$d,
  Blog: Blog$d,
  "Knowledge Base": "知识库",
  More: More$d,
  Notes: Notes$d,
  Contacts: Contacts$d,
  Organizations: Organizations$d,
  Users: Users$d,
  Customers: Customers$d,
  Settings: Settings$d,
  Global: Global$d,
  Categories: Categories$d,
  Status: Status$d,
  Priorities: Priorities$d,
  Departments: Departments$d,
  Types: Types$d,
  "Email Templates": "邮件模板",
  "SMTP Mail": "SMTP 邮件",
  Pusher: Pusher$d,
  "Pusher Chat": "推送聊天",
  "Front Pages": "前端页面",
  Contact: Contact$d,
  Services: Services$d,
  "Privacy Policy": "隐私政策",
  "Terms of Services": "服务条款",
  Filter: Filter$d,
  Trashed: Trashed$d,
  "Trashed With": "包含已删除",
  "Only Trashed": "仅显示已删除",
  "Search...": "搜索...",
  Reset: Reset$d,
  Name: Name$d,
  Email: Email$d,
  Phone: Phone$d,
  Country: Country$d,
  "Create User": "创建用户",
  "First Name": "名字",
  "First name": "名字",
  "Last Name": "姓氏",
  "Last name": "姓氏",
  City: City$d,
  Address: Address$d,
  Password: Password$d,
  Role: Role$d,
  Photo: Photo$d,
  "New Tickets": "新工单",
  "Open Tickets": "已打开的工单",
  "Closed Tickets": "已关闭的工单",
  "Unassigned Tickets": "未分配的工单",
  "Ticket by department": "按部门分类的工单",
  "Ticket by type": "按类型分类的工单",
  "Top ticket creator": "工单创建者排名",
  "Ticket history": "工单历史",
  "First Response Time": "首次响应时间",
  "Last Response Time": "最后响应时间",
  Technical: Technical$d,
  Hardware: Hardware$d,
  Development: Development$d,
  Management: Management$d,
  Admin: Admin$d,
  Software: Software$d,
  Service: Service$d,
  Event: Event$d,
  Average: Average$d,
  Seconds: Seconds$d,
  "this month": "本月",
  "last month": "上月",
  Month: Month$d,
  Months: Months$d,
  Day: Day$d,
  Days: Days$d,
  Hours: Hours$d,
  Hour: Hour$d,
  Minutes: Minutes$d,
  Minute: Minute$d,
  Key: Key$d,
  Subject: Subject$d,
  "Attach files": "附件",
  Priority: Priority$d,
  "Date": "日期",
  Updated: Updated$d,
  Customer: Customer$d,
  Department: Department$d,
  "Assigned to": "分配给",
  "Ticket type": "工单类型",
  Category: Category$d,
  Created: Created$d,
  "Request Details": "请求详情",
  "Attach File": "附加文件",
  "Delete Ticket": "删除工单",
  Save: Save$d,
  "Ticket discussion": "工单讨论",
  Ticket: Ticket$d,
  FAQ: FAQ$d,
  "Create Ticket": "创建工单",
  "New Ticket": "新工单",
  "Create FAQ": "创建常见问题",
  "Filter by priority": "按优先级筛选",
  "Filter by status": "按状态筛选",
  "Delete FAQ": "删除常见问题",
  Title: Title$d,
  Details: Details$d,
  Note: Note$d,
  Submit: Submit$d,
  Cancel: Cancel$d,
  "Delete note": "删除备注",
  Organization: Organization$d,
  Province: Province$d,
  State: State$d,
  "Postal code": "邮政编码",
  "Delete Organization": "删除组织",
  "Update Organization": "更新组织",
  Delete: Delete$d,
  Update: Update$d,
  Create: Create$d,
  "Create Customer": "创建客户",
  "Manage Users": "管理用户",
  "Default Language": "默认语言",
  "Email Notifications": "邮件通知",
  "Create ticket by new customer": "新客户创建工单",
  "Create ticket from dashboard": "从仪表板创建工单",
  "Status or priority changes": "状态或优先级变更",
  "Create a new user": "创建新用户",
  "Email Template": "邮件模板",
  "SMTP Host": "SMTP 主机",
  "SMTP Port": "SMTP 端口",
  "SMTP Username": "SMTP 用户名",
  "SMTP Password": "SMTP 密码",
  Location: Location$d,
  "Phone number": "电话号码",
  "Email address": "电子邮件地址",
  "Add New": "新增",
  Privacy: Privacy$d,
  Company: Company$d,
  Subscribe: Subscribe$d,
  Login: Login$d,
  "Submit ticket": "提交工单",
  "terms and conditions": "条款和条件",
  "I agree with the": "我同意",
  "Don’t have account?": "没有账户？",
  "Remember Me": "记住我",
  "Reset Password": "重置密码",
  "Already have an account?": "已有账户？",
  "Good Morning": "早上好",
  "Good Noon": "中午好",
  "Good Evening": "晚上好",
  "Good Afternoon": "下午好",
  Hello: Hello$d,
  "Forgot your password?": "忘记密码？",
  "Send Password Reset Link": "发送密码重置链接",
  Registration: Registration$d
};
const __vite_glob_1_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Address: Address$d,
  Admin: Admin$d,
  Average: Average$d,
  Blog: Blog$d,
  Cancel: Cancel$d,
  Categories: Categories$d,
  Category: Category$d,
  Chat: Chat$d,
  City: City$d,
  Company: Company$d,
  Contact: Contact$d,
  Contacts: Contacts$d,
  Country: Country$d,
  Create: Create$d,
  Created: Created$d,
  Customer: Customer$d,
  Customers: Customers$d,
  Dashboard: Dashboard$d,
  Day: Day$d,
  Days: Days$d,
  Delete: Delete$d,
  Department: Department$d,
  Departments: Departments$d,
  Details: Details$d,
  Development: Development$d,
  Email: Email$d,
  Event: Event$d,
  FAQ: FAQ$d,
  FAQs: FAQs$d,
  Filter: Filter$d,
  Global: Global$d,
  Hardware: Hardware$d,
  Hello: Hello$d,
  Hour: Hour$d,
  Hours: Hours$d,
  Key: Key$d,
  Location: Location$d,
  Login: Login$d,
  Logout: Logout$d,
  Management: Management$d,
  Minute: Minute$d,
  Minutes: Minutes$d,
  Month: Month$d,
  Months: Months$d,
  More: More$d,
  Name: Name$d,
  Note: Note$d,
  Notes: Notes$d,
  Organization: Organization$d,
  Organizations: Organizations$d,
  Password: Password$d,
  Phone: Phone$d,
  Photo: Photo$d,
  Priorities: Priorities$d,
  Priority: Priority$d,
  Privacy: Privacy$d,
  Province: Province$d,
  Pusher: Pusher$d,
  Registration: Registration$d,
  Reset: Reset$d,
  Role: Role$d,
  Save: Save$d,
  Seconds: Seconds$d,
  Service: Service$d,
  Services: Services$d,
  Settings: Settings$d,
  Software: Software$d,
  State: State$d,
  Status: Status$d,
  Subject: Subject$d,
  Submit: Submit$d,
  Subscribe: Subscribe$d,
  Technical: Technical$d,
  Ticket: Ticket$d,
  Tickets: Tickets$d,
  Title: Title$d,
  Trashed: Trashed$d,
  Types: Types$d,
  Update: Update$d,
  Updated: Updated$d,
  Users: Users$d,
  default: cn
}, Symbol.toStringTag, { value: "Module" }));
const Dashboard$c = "Dashboard";
const Logout$c = "Abmelden";
const Tickets$c = "Tickets";
const Chat$c = "Chat";
const FAQs$c = "Häufig gestellte Fragen";
const Blog$c = "Blog";
const More$c = "Mehr";
const Notes$c = "Notizen";
const Contacts$c = "Kontakte";
const Organizations$c = "Organisationen";
const Users$c = "Benutzer";
const Customers$c = "Kunden";
const Settings$c = "Einstellungen";
const Global$c = "Global";
const Categories$c = "Kategorien";
const Status$c = "Status";
const Priorities$c = "Prioritäten";
const Departments$c = "Abteilungen";
const Types$c = "Typen";
const Pusher$c = "Pusher";
const Contact$c = "Kontakt";
const Services$c = "Dienstleistungen";
const Filter$c = "Filter";
const Trashed$c = "Gelöscht";
const Reset$c = "Zurücksetzen";
const Name$c = "Name";
const Email$c = "E-Mail";
const Phone$c = "Telefon";
const Country$c = "Land";
const City$c = "Stadt";
const Address$c = "Adresse";
const Password$c = "Passwort";
const Role$c = "Rolle";
const Photo$c = "Foto";
const Technical$c = "Technisch";
const Hardware$c = "Hardware";
const Development$c = "Entwicklung";
const Management$c = "Management";
const Admin$c = "Admin";
const Software$c = "Software";
const Service$c = "Dienst";
const Event$c = "Ereignis";
const Average$c = "Durchschnitt";
const Seconds$c = "Sekunden";
const Month$c = "Monat";
const Months$c = "Monate";
const Day$c = "Tag";
const Days$c = "Tage";
const Hours$c = "Stunden";
const Hour$c = "Stunde";
const Minutes$c = "Minuten";
const Minute$c = "Minute";
const Key$c = "Schlüssel";
const Subject$c = "Betreff";
const Priority$c = "Priorität";
const Updated$c = "Aktualisiert";
const Customer$c = "Kunde";
const Department$c = "Abteilung";
const Category$c = "Kategorie";
const Created$c = "Erstellt";
const Save$c = "Speichern";
const Ticket$c = "Ticket";
const FAQ$c = "FAQ";
const Title$c = "Titel";
const Details$c = "Details";
const Note$c = "Notiz";
const Submit$c = "Absenden";
const Cancel$c = "Abbrechen";
const Organization$c = "Organisation";
const Province$c = "Provinz";
const State$c = "Bundesland";
const Delete$c = "Löschen";
const Update$c = "Aktualisieren";
const Create$c = "Erstellen";
const Location$c = "Standort";
const Privacy$c = "Datenschutz";
const Company$c = "Unternehmen";
const Subscribe$c = "Abonnieren";
const Login$c = "Anmelden";
const Hello$c = "Hallo";
const Registration$c = "Registrierung";
const de = {
  "Edit Profile": "Profil bearbeiten",
  Dashboard: Dashboard$c,
  Logout: Logout$c,
  Tickets: Tickets$c,
  Chat: Chat$c,
  FAQs: FAQs$c,
  Blog: Blog$c,
  "Knowledge Base": "Wissensdatenbank",
  More: More$c,
  Notes: Notes$c,
  Contacts: Contacts$c,
  Organizations: Organizations$c,
  Users: Users$c,
  Customers: Customers$c,
  Settings: Settings$c,
  Global: Global$c,
  Categories: Categories$c,
  Status: Status$c,
  Priorities: Priorities$c,
  Departments: Departments$c,
  Types: Types$c,
  "Email Templates": "E-Mail-Vorlagen",
  "SMTP Mail": "SMTP-Mail",
  Pusher: Pusher$c,
  "Pusher Chat": "Pusher-Chat",
  "Front Pages": "Startseiten",
  Contact: Contact$c,
  Services: Services$c,
  "Privacy Policy": "Datenschutzrichtlinie",
  "Terms of Services": "Nutzungsbedingungen",
  Filter: Filter$c,
  Trashed: Trashed$c,
  "Trashed With": "Mit gelöscht",
  "Only Trashed": "Nur gelöscht",
  "Search...": "Suche...",
  Reset: Reset$c,
  Name: Name$c,
  Email: Email$c,
  Phone: Phone$c,
  Country: Country$c,
  "Create User": "Benutzer erstellen",
  "First Name": "Vorname",
  "First name": "Vorname",
  "Last Name": "Nachname",
  "Last name": "Nachname",
  City: City$c,
  Address: Address$c,
  Password: Password$c,
  Role: Role$c,
  Photo: Photo$c,
  "New Tickets": "Neue Tickets",
  "Open Tickets": "Offene Tickets",
  "Closed Tickets": "Geschlossene Tickets",
  "Unassigned Tickets": "Nicht zugewiesene Tickets",
  "Ticket by department": "Tickets nach Abteilung",
  "Ticket by type": "Tickets nach Typ",
  "Top ticket creator": "Top-Ticket-Ersteller",
  "Ticket history": "Ticketverlauf",
  "First Response Time": "Erste Reaktionszeit",
  "Last Response Time": "Letzte Reaktionszeit",
  Technical: Technical$c,
  Hardware: Hardware$c,
  Development: Development$c,
  Management: Management$c,
  Admin: Admin$c,
  Software: Software$c,
  Service: Service$c,
  Event: Event$c,
  Average: Average$c,
  Seconds: Seconds$c,
  "this month": "diesen Monat",
  "last month": "letzten Monat",
  Month: Month$c,
  Months: Months$c,
  Day: Day$c,
  Days: Days$c,
  Hours: Hours$c,
  Hour: Hour$c,
  Minutes: Minutes$c,
  Minute: Minute$c,
  Key: Key$c,
  Subject: Subject$c,
  "Attach files": "Dateien anhängen",
  Priority: Priority$c,
  "Date": "Datum",
  Updated: Updated$c,
  Customer: Customer$c,
  Department: Department$c,
  "Assigned to": "Zugewiesen an",
  "Ticket type": "Tickettyp",
  Category: Category$c,
  Created: Created$c,
  "Request Details": "Anfragedetails",
  "Attach File": "Datei anhängen",
  "Delete Ticket": "Ticket löschen",
  Save: Save$c,
  "Ticket discussion": "Ticket-Diskussion",
  Ticket: Ticket$c,
  FAQ: FAQ$c,
  "Create Ticket": "Ticket erstellen",
  "New Ticket": "Neues Ticket",
  "Create FAQ": "FAQ erstellen",
  "Filter by priority": "Nach Priorität filtern",
  "Filter by status": "Nach Status filtern",
  "Delete FAQ": "FAQ löschen",
  Title: Title$c,
  Details: Details$c,
  Note: Note$c,
  Submit: Submit$c,
  Cancel: Cancel$c,
  "Delete note": "Notiz löschen",
  Organization: Organization$c,
  Province: Province$c,
  State: State$c,
  "Postal code": "Postleitzahl",
  "Delete Organization": "Organisation löschen",
  "Update Organization": "Organisation aktualisieren",
  Delete: Delete$c,
  Update: Update$c,
  Create: Create$c,
  "Create Customer": "Kunde erstellen",
  "Manage Users": "Benutzer verwalten",
  "Default Language": "Standardsprache",
  "Email Notifications": "E-Mail-Benachrichtigungen",
  "Create ticket by new customer": "Ticket durch neuen Kunden erstellen",
  "Create ticket from dashboard": "Ticket vom Dashboard erstellen",
  "Status or priority changes": "Status- oder Prioritätsänderungen",
  "Create a new user": "Neuen Benutzer erstellen",
  "Email Template": "E-Mail-Vorlage",
  "SMTP Host": "SMTP-Host",
  "SMTP Port": "SMTP-Port",
  "SMTP Username": "SMTP-Benutzername",
  "SMTP Password": "SMTP-Passwort",
  Location: Location$c,
  "Phone number": "Telefonnummer",
  "Email address": "E-Mail-Adresse",
  "Add New": "Neu hinzufügen",
  Privacy: Privacy$c,
  Company: Company$c,
  Subscribe: Subscribe$c,
  Login: Login$c,
  "Submit ticket": "Ticket einreichen",
  "terms and conditions": "Allgemeine Geschäftsbedingungen",
  "I agree with the": "Ich stimme zu",
  "Don’t have account?": "Kein Konto?",
  "Remember Me": "Angemeldet bleiben",
  "Reset Password": "Passwort zurücksetzen",
  "Already have an account?": "Bereits ein Konto?",
  "Good Morning": "Guten Morgen",
  "Good Noon": "Guten Mittag",
  "Good Evening": "Guten Abend",
  "Good Afternoon": "Guten Nachmittag",
  Hello: Hello$c,
  "Forgot your password?": "Passwort vergessen?",
  "Send Password Reset Link": "Passwort-Zurücksetzungslink senden",
  Registration: Registration$c
};
const __vite_glob_1_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Address: Address$c,
  Admin: Admin$c,
  Average: Average$c,
  Blog: Blog$c,
  Cancel: Cancel$c,
  Categories: Categories$c,
  Category: Category$c,
  Chat: Chat$c,
  City: City$c,
  Company: Company$c,
  Contact: Contact$c,
  Contacts: Contacts$c,
  Country: Country$c,
  Create: Create$c,
  Created: Created$c,
  Customer: Customer$c,
  Customers: Customers$c,
  Dashboard: Dashboard$c,
  Day: Day$c,
  Days: Days$c,
  Delete: Delete$c,
  Department: Department$c,
  Departments: Departments$c,
  Details: Details$c,
  Development: Development$c,
  Email: Email$c,
  Event: Event$c,
  FAQ: FAQ$c,
  FAQs: FAQs$c,
  Filter: Filter$c,
  Global: Global$c,
  Hardware: Hardware$c,
  Hello: Hello$c,
  Hour: Hour$c,
  Hours: Hours$c,
  Key: Key$c,
  Location: Location$c,
  Login: Login$c,
  Logout: Logout$c,
  Management: Management$c,
  Minute: Minute$c,
  Minutes: Minutes$c,
  Month: Month$c,
  Months: Months$c,
  More: More$c,
  Name: Name$c,
  Note: Note$c,
  Notes: Notes$c,
  Organization: Organization$c,
  Organizations: Organizations$c,
  Password: Password$c,
  Phone: Phone$c,
  Photo: Photo$c,
  Priorities: Priorities$c,
  Priority: Priority$c,
  Privacy: Privacy$c,
  Province: Province$c,
  Pusher: Pusher$c,
  Registration: Registration$c,
  Reset: Reset$c,
  Role: Role$c,
  Save: Save$c,
  Seconds: Seconds$c,
  Service: Service$c,
  Services: Services$c,
  Settings: Settings$c,
  Software: Software$c,
  State: State$c,
  Status: Status$c,
  Subject: Subject$c,
  Submit: Submit$c,
  Subscribe: Subscribe$c,
  Technical: Technical$c,
  Ticket: Ticket$c,
  Tickets: Tickets$c,
  Title: Title$c,
  Trashed: Trashed$c,
  Types: Types$c,
  Update: Update$c,
  Updated: Updated$c,
  Users: Users$c,
  default: de
}, Symbol.toStringTag, { value: "Module" }));
const Dashboard$b = "Dashboard";
const Logout$b = "Logout";
const Tickets$b = "Tickets";
const Chat$b = "Chat";
const FAQs$b = "FAQs";
const Blog$b = "Blog";
const More$b = "More";
const Notes$b = "Notes";
const Contacts$b = "Contacts";
const Organizations$b = "Organizations";
const Users$b = "Users";
const Customers$b = "Customers";
const Settings$b = "Settings";
const Global$b = "Global";
const Categories$b = "Categories";
const Status$b = "Status";
const Priorities$b = "Priorities";
const Departments$b = "Departments";
const Types$b = "Types";
const Pusher$b = "Pusher";
const Contact$b = "Contact";
const Services$b = "Services";
const Filter$b = "Filter";
const Trashed$b = "Trashed";
const Reset$b = "Reset";
const Name$b = "Name";
const Email$b = "Email";
const Phone$b = "Phone";
const Country$b = "Country";
const City$b = "City";
const Address$b = "Address";
const Password$b = "Password";
const Role$b = "Role";
const Photo$b = "Photo";
const Technical$b = "Technical";
const Hardware$b = "Hardware";
const Development$b = "Development";
const Management$b = "Management";
const Admin$b = "Admin";
const Software$b = "Software";
const Service$b = "Service";
const Event$b = "Event";
const Average$b = "Average";
const Seconds$b = "Seconds";
const Month$b = "Month";
const Months$b = "Months";
const Day$b = "Day";
const Days$b = "Days";
const Hours$b = "Hours";
const Hour$b = "Hour";
const Minutes$b = "Minutes";
const Minute$b = "Minute";
const Key$b = "Key";
const Subject$b = "Subject";
const Priority$b = "Priority";
const Updated$b = "Updated";
const Customer$b = "Customer";
const Department$b = "Department";
const Category$b = "Category";
const Created$b = "Created";
const Save$b = "Save";
const Ticket$b = "Ticket";
const FAQ$b = "FAQ";
const Title$b = "Title";
const Type = "Type";
const Details$b = "Details";
const Note$b = "Note";
const Submit$b = "Submit";
const Cancel$b = "Cancel";
const Organization$b = "Organization";
const Province$b = "Province";
const State$b = "State";
const Delete$b = "Delete";
const Update$b = "Update";
const Create$b = "Create";
const Statuses = "Statuses";
const Slug = "Slug";
const Location$b = "Location";
const Icon = "Icon";
const Tag = "Tag";
const Privacy$b = "Privacy";
const Bottom = "Bottom";
const Company$b = "Company";
const Subscribe$b = "Subscribe";
const Login$b = "Login";
const Faqs = "Faqs";
const Active = "Active";
const Inactive = "Inactive";
const Browse = "Browse";
const Knowledge = "Knowledge";
const Languages = "Languages";
const User = "User";
const Home = "Home";
const Register = "Register";
const Newsletter = "Newsletter";
const Hello$b = "Hello";
const Registration$b = "Registration";
const en = {
  "Edit Profile": "Edit Profile",
  Dashboard: Dashboard$b,
  Logout: Logout$b,
  Tickets: Tickets$b,
  Chat: Chat$b,
  FAQs: FAQs$b,
  Blog: Blog$b,
  "Knowledge Base": "Knowledge Base",
  More: More$b,
  Notes: Notes$b,
  Contacts: Contacts$b,
  Organizations: Organizations$b,
  Users: Users$b,
  Customers: Customers$b,
  Settings: Settings$b,
  Global: Global$b,
  Categories: Categories$b,
  Status: Status$b,
  Priorities: Priorities$b,
  Departments: Departments$b,
  Types: Types$b,
  "Email Templates": "Email Templates",
  "SMTP Mail": "SMTP Mail",
  Pusher: Pusher$b,
  "Pusher Chat": "Pusher Chat",
  "Front Pages": "Front Pages",
  Contact: Contact$b,
  Services: Services$b,
  "Privacy Policy": "Privacy Policy",
  "Terms of Services": "Terms of Services",
  Filter: Filter$b,
  Trashed: Trashed$b,
  "Trashed With": "Trashed With",
  "Only Trashed": "Only Trashed",
  "Search...": "Search...",
  Reset: Reset$b,
  Name: Name$b,
  Email: Email$b,
  Phone: Phone$b,
  Country: Country$b,
  "Create User": "Create User",
  "First Name": "First Name",
  "First name": "First name",
  "Last Name": "Last Name",
  "Last name": "Last name",
  City: City$b,
  Address: Address$b,
  Password: Password$b,
  Role: Role$b,
  Photo: Photo$b,
  "New Tickets": "New Tickets",
  "Open Tickets": "Open Tickets",
  "Closed Tickets": "Closed Tickets",
  "Unassigned Tickets": "Unassigned Tickets",
  "Ticket by department": "Ticket by department",
  "Ticket by type": "Ticket by type",
  "Top ticket creator": "Top ticket creator",
  "Ticket history": "Ticket history",
  "First Response Time": "First Response Time",
  "Last Response Time": "Last Response Time",
  Technical: Technical$b,
  Hardware: Hardware$b,
  Development: Development$b,
  Management: Management$b,
  Admin: Admin$b,
  Software: Software$b,
  Service: Service$b,
  Event: Event$b,
  Average: Average$b,
  Seconds: Seconds$b,
  "this month": "this month",
  "last month": "last month",
  Month: Month$b,
  Months: Months$b,
  Day: Day$b,
  Days: Days$b,
  Hours: Hours$b,
  Hour: Hour$b,
  Minutes: Minutes$b,
  Minute: Minute$b,
  Key: Key$b,
  Subject: Subject$b,
  "Attach files": "Attach files",
  Priority: Priority$b,
  "Date": "Date",
  Updated: Updated$b,
  Customer: Customer$b,
  Department: Department$b,
  "Assigned to": "Assigned to",
  "Ticket type": "Ticket type",
  Category: Category$b,
  Created: Created$b,
  "Request Details": "Request Details",
  "Attach File": "Attach File",
  "Delete Ticket": "Delete Ticket",
  Save: Save$b,
  "Ticket discussion": "Ticket discussion",
  "Comment histories for this ticket will be available here.": "Comment histories for this ticket will be available here.",
  Ticket: Ticket$b,
  "Comment histories": "Comment histories",
  "Comment history": "Comment history",
  "Write a comment and press enter to send...": "Write a comment and press enter to send...",
  "Click on a conversation from left to see the histories.": "Click on a conversation from left to see the histories.",
  "Type a message...": "Type a message...",
  FAQ: FAQ$b,
  "Create Ticket": "Create Ticket",
  "New Ticket": "New Ticket",
  "Create FAQ": "Create FAQ",
  "Filter by priority": "Filter by priority",
  "Filter by status": "Filter by status",
  "Filter by role": "Filter by role",
  "Delete FAQ": "Delete FAQ",
  "Update FAQ": "Update FAQ",
  "Create Knowledge Base": "Create Knowledge Base",
  Title: Title$b,
  Type,
  Details: Details$b,
  "Delete knowledge base": "Delete knowledge base",
  "Update knowledge base": "Update knowledge base",
  Note: Note$b,
  "No ticket found.": "No ticket found.",
  "note details here...": "note details here...",
  Submit: Submit$b,
  Cancel: Cancel$b,
  "Delete note": "Delete note",
  "Create Contact": "Create Contact",
  Organization: Organization$b,
  "Delete Contact": "Delete Contact",
  "Update Contact": "Update Contact",
  "Create Organization": "Create Organization",
  Province: Province$b,
  State: State$b,
  "Postal code": "Postal code",
  "Delete Organization": "Delete Organization",
  "Update Organization": "Update Organization",
  Delete: Delete$b,
  Update: Update$b,
  Create: Create$b,
  "Create Customer": "Create Customer",
  "Manage Users": "Manage Users",
  "Delete User": "Delete User",
  "Update User": "Update User",
  "Are you sure you want to delete this user?": "Are you sure you want to delete this user?",
  "App Name": "App Name",
  "Default Language": "Default Language",
  "Email Notifications": "Email Notifications",
  "Create ticket by new customer": "Create ticket by new customer",
  "Create ticket from dashboard": "Create ticket from dashboard",
  "Notification for the first comment": "Notification for the first comment",
  "User got assigned for a task": "User got assigned for a task",
  "Status or priority changes": "Status or priority changes",
  "Create a new user": "Create a new user",
  "Cron Job Instruction": "Cron Job Instruction",
  "If you would like to send mail without delaying you need to set a cron job for that with once per minute.": "If you would like to send mail without delaying you need to set a cron job for that with once per minute.",
  "Create Category": "Create Category",
  "Create New": "Create New",
  Statuses,
  "Create Status": "Create Status",
  Slug,
  "Create Priority": "Create Priority",
  "Create Department": "Create Department",
  "Create Type": "Create Type",
  "Email Template": "Email Template",
  "Email Html": "Email Html",
  "Update Template": "Update Template",
  "SMTP Host": "SMTP Host",
  "SMTP Port": "SMTP Port",
  "SMTP Username": "SMTP Username",
  "SMTP Password": "SMTP Password",
  "Mail Encryption": "Mail Encryption",
  "From Address": "From Address",
  "From Name": "From Name",
  "Pusher App ID": "Pusher App ID",
  "Pusher App Key": "Pusher App Key",
  "Pusher App Secret": "Pusher App Secret",
  "Pusher App Cluster": "Pusher App Cluster",
  Location: Location$b,
  "Phone number": "Phone number",
  "Email address": "Email address",
  "Email Address": "Email Address",
  "Location address": "Location address",
  "Email details": "Email details",
  "Location details": "Location details",
  "Location map": "Location map",
  "Add New": "Add New",
  Icon,
  Tag,
  Privacy: Privacy$b,
  "List information": "List information",
  Bottom,
  "List items": "List items",
  "Page Content": "Page Content",
  "Frequently Asked Questions": "Frequently Asked Questions",
  "Contact us": "Contact us",
  "Useful Link": "Useful Link",
  Company: Company$b,
  Subscribe: Subscribe$b,
  Login: Login$b,
  "Submit ticket": "Submit ticket",
  "Login HelpDesk": "Login HelpDesk",
  Faqs,
  "Filter Ticket By": "Filter Ticket By",
  "Assign To": "Assign To",
  "No conversation found.": "No conversation found.",
  "No faqs found.": "No faqs found.",
  "Faq Description": "Faq Description",
  Active,
  Inactive,
  Browse,
  Knowledge,
  Languages,
  User,
  "No languages found.": "No languages found.",
  "User roles": "User roles",
  "No organizations found.": "No organizations found.",
  Home,
  "Create a ticket": "Create a ticket",
  "Open a ticket": "Open a ticket",
  "Select a category": "Select a category",
  "Select a type": "Select a type",
  "Select a department": "Select a department",
  "Start Chat": "Start Chat",
  "Confirm Password": "Confirm Password",
  "No customers found.": "No customers found.",
  "No knowledge base found.": "No knowledge base found.",
  "Create Post": "Create Post",
  "Feature image": "Feature image",
  "Select type": "Select type",
  "Create a new post": "Create a new post",
  "No post base found.": "No post base found.",
  "Is Active": "Is Active",
  "All Posts": "All Posts",
  "Search your query in the FAQ items...": "Search your query in the FAQ items...",
  Register,
  "Useful Links": "Useful Links",
  Newsletter,
  "Your email address": "Your email address",
  "Join our newsletter service.": "Join our newsletter service.",
  "terms and conditions": "terms and conditions",
  "I agree with the": "I agree with the",
  "Don’t have account?": "Don’t have account?",
  "Remember Me": "Remember Me",
  "Reset Password": "Reset Password",
  "Already have an account?": "Already have an account?",
  "Good Morning": "Good Morning",
  "Good Noon": "Good Noon",
  "Good Evening": "Good Evening",
  "Good Afternoon": "Good Afternoon",
  Hello: Hello$b,
  "Forgot your password?": "Forgot your password?",
  "Send Password Reset Link": "Send Password Reset Link",
  Registration: Registration$b
};
const __vite_glob_1_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Active,
  Address: Address$b,
  Admin: Admin$b,
  Average: Average$b,
  Blog: Blog$b,
  Bottom,
  Browse,
  Cancel: Cancel$b,
  Categories: Categories$b,
  Category: Category$b,
  Chat: Chat$b,
  City: City$b,
  Company: Company$b,
  Contact: Contact$b,
  Contacts: Contacts$b,
  Country: Country$b,
  Create: Create$b,
  Created: Created$b,
  Customer: Customer$b,
  Customers: Customers$b,
  Dashboard: Dashboard$b,
  Day: Day$b,
  Days: Days$b,
  Delete: Delete$b,
  Department: Department$b,
  Departments: Departments$b,
  Details: Details$b,
  Development: Development$b,
  Email: Email$b,
  Event: Event$b,
  FAQ: FAQ$b,
  FAQs: FAQs$b,
  Faqs,
  Filter: Filter$b,
  Global: Global$b,
  Hardware: Hardware$b,
  Hello: Hello$b,
  Home,
  Hour: Hour$b,
  Hours: Hours$b,
  Icon,
  Inactive,
  Key: Key$b,
  Knowledge,
  Languages,
  Location: Location$b,
  Login: Login$b,
  Logout: Logout$b,
  Management: Management$b,
  Minute: Minute$b,
  Minutes: Minutes$b,
  Month: Month$b,
  Months: Months$b,
  More: More$b,
  Name: Name$b,
  Newsletter,
  Note: Note$b,
  Notes: Notes$b,
  Organization: Organization$b,
  Organizations: Organizations$b,
  Password: Password$b,
  Phone: Phone$b,
  Photo: Photo$b,
  Priorities: Priorities$b,
  Priority: Priority$b,
  Privacy: Privacy$b,
  Province: Province$b,
  Pusher: Pusher$b,
  Register,
  Registration: Registration$b,
  Reset: Reset$b,
  Role: Role$b,
  Save: Save$b,
  Seconds: Seconds$b,
  Service: Service$b,
  Services: Services$b,
  Settings: Settings$b,
  Slug,
  Software: Software$b,
  State: State$b,
  Status: Status$b,
  Statuses,
  Subject: Subject$b,
  Submit: Submit$b,
  Subscribe: Subscribe$b,
  Tag,
  Technical: Technical$b,
  Ticket: Ticket$b,
  Tickets: Tickets$b,
  Title: Title$b,
  Trashed: Trashed$b,
  Type,
  Types: Types$b,
  Update: Update$b,
  Updated: Updated$b,
  User,
  Users: Users$b,
  default: en
}, Symbol.toStringTag, { value: "Module" }));
const Dashboard$a = "Tablero";
const Logout$a = "Cerrar sesión";
const Tickets$a = "Tickets";
const Chat$a = "Chat";
const FAQs$a = "Preguntas frecuentes";
const Blog$a = "Blog";
const More$a = "Más";
const Notes$a = "Notas";
const Contacts$a = "Contactos";
const Organizations$a = "Organizaciones";
const Users$a = "Usuarios";
const Customers$a = "Clientes";
const Settings$a = "Configuraciones";
const Global$a = "Global";
const Categories$a = "Categorías";
const Status$a = "Estado";
const Priorities$a = "Prioridades";
const Departments$a = "Departamentos";
const Types$a = "Tipos";
const Pusher$a = "Pusher";
const Contact$a = "Contacto";
const Services$a = "Servicios";
const Filter$a = "Filtrar";
const Trashed$a = "Eliminado";
const Reset$a = "Restablecer";
const Name$a = "Nombre";
const Email$a = "Correo electrónico";
const Phone$a = "Teléfono";
const Country$a = "País";
const City$a = "Ciudad";
const Address$a = "Dirección";
const Password$a = "Contraseña";
const Role$a = "Rol";
const Photo$a = "Foto";
const Technical$a = "Técnico";
const Hardware$a = "Hardware";
const Development$a = "Desarrollo";
const Management$a = "Gestión";
const Admin$a = "Administrador";
const Software$a = "Software";
const Service$a = "Servicio";
const Event$a = "Evento";
const Average$a = "Promedio";
const Seconds$a = "Segundos";
const Month$a = "Mes";
const Months$a = "Meses";
const Day$a = "Día";
const Days$a = "Días";
const Hours$a = "Horas";
const Hour$a = "Hora";
const Minutes$a = "Minutos";
const Minute$a = "Minuto";
const Key$a = "Clave";
const Subject$a = "Asunto";
const Priority$a = "Prioridad";
const Updated$a = "Actualizado";
const Customer$a = "Cliente";
const Department$a = "Departamento";
const Category$a = "Categoría";
const Created$a = "Creado";
const Save$a = "Guardar";
const Ticket$a = "Ticket";
const FAQ$a = "Preguntas frecuentes";
const Title$a = "Título";
const Details$a = "Detalles";
const Note$a = "Nota";
const Submit$a = "Enviar";
const Cancel$a = "Cancelar";
const Organization$a = "Organización";
const Province$a = "Provincia";
const State$a = "Estado";
const Delete$a = "Eliminar";
const Update$a = "Actualizar";
const Create$a = "Crear";
const Location$a = "Ubicación";
const Privacy$a = "Privacidad";
const Company$a = "Empresa";
const Subscribe$a = "Suscribirse";
const Login$a = "Iniciar sesión";
const Hello$a = "Hola";
const Registration$a = "Registro";
const es = {
  "Edit Profile": "Editar perfil",
  Dashboard: Dashboard$a,
  Logout: Logout$a,
  Tickets: Tickets$a,
  Chat: Chat$a,
  FAQs: FAQs$a,
  Blog: Blog$a,
  "Knowledge Base": "Base de conocimientos",
  More: More$a,
  Notes: Notes$a,
  Contacts: Contacts$a,
  Organizations: Organizations$a,
  Users: Users$a,
  Customers: Customers$a,
  Settings: Settings$a,
  Global: Global$a,
  Categories: Categories$a,
  Status: Status$a,
  Priorities: Priorities$a,
  Departments: Departments$a,
  Types: Types$a,
  "Email Templates": "Plantillas de correo",
  "SMTP Mail": "Correo SMTP",
  Pusher: Pusher$a,
  "Pusher Chat": "Chat de Pusher",
  "Front Pages": "Páginas principales",
  Contact: Contact$a,
  Services: Services$a,
  "Privacy Policy": "Política de privacidad",
  "Terms of Services": "Términos de servicio",
  Filter: Filter$a,
  Trashed: Trashed$a,
  "Trashed With": "Eliminado con",
  "Only Trashed": "Solo eliminados",
  "Search...": "Buscar...",
  Reset: Reset$a,
  Name: Name$a,
  Email: Email$a,
  Phone: Phone$a,
  Country: Country$a,
  "Create User": "Crear usuario",
  "First Name": "Nombre",
  "First name": "Nombre",
  "Last Name": "Apellido",
  "Last name": "Apellido",
  City: City$a,
  Address: Address$a,
  Password: Password$a,
  Role: Role$a,
  Photo: Photo$a,
  "New Tickets": "Nuevos tickets",
  "Open Tickets": "Tickets abiertos",
  "Closed Tickets": "Tickets cerrados",
  "Unassigned Tickets": "Tickets sin asignar",
  "Ticket by department": "Tickets por departamento",
  "Ticket by type": "Tickets por tipo",
  "Top ticket creator": "Creador de tickets destacado",
  "Ticket history": "Historial de tickets",
  "First Response Time": "Tiempo de primera respuesta",
  "Last Response Time": "Tiempo de última respuesta",
  Technical: Technical$a,
  Hardware: Hardware$a,
  Development: Development$a,
  Management: Management$a,
  Admin: Admin$a,
  Software: Software$a,
  Service: Service$a,
  Event: Event$a,
  Average: Average$a,
  Seconds: Seconds$a,
  "this month": "este mes",
  "last month": "el mes pasado",
  Month: Month$a,
  Months: Months$a,
  Day: Day$a,
  Days: Days$a,
  Hours: Hours$a,
  Hour: Hour$a,
  Minutes: Minutes$a,
  Minute: Minute$a,
  Key: Key$a,
  Subject: Subject$a,
  "Attach files": "Adjuntar archivos",
  Priority: Priority$a,
  "Date": "Fecha",
  Updated: Updated$a,
  Customer: Customer$a,
  Department: Department$a,
  "Assigned to": "Asignado a",
  "Ticket type": "Tipo de ticket",
  Category: Category$a,
  Created: Created$a,
  "Request Details": "Detalles de la solicitud",
  "Attach File": "Adjuntar archivo",
  "Delete Ticket": "Eliminar ticket",
  Save: Save$a,
  "Ticket discussion": "Discusión del ticket",
  Ticket: Ticket$a,
  FAQ: FAQ$a,
  "Create Ticket": "Crear ticket",
  "New Ticket": "Nuevo ticket",
  "Create FAQ": "Crear pregunta frecuente",
  "Filter by priority": "Filtrar por prioridad",
  "Filter by status": "Filtrar por estado",
  "Delete FAQ": "Eliminar pregunta frecuente",
  Title: Title$a,
  Details: Details$a,
  Note: Note$a,
  Submit: Submit$a,
  Cancel: Cancel$a,
  "Delete note": "Eliminar nota",
  Organization: Organization$a,
  Province: Province$a,
  State: State$a,
  "Postal code": "Código postal",
  "Delete Organization": "Eliminar organización",
  "Update Organization": "Actualizar organización",
  Delete: Delete$a,
  Update: Update$a,
  Create: Create$a,
  "Create Customer": "Crear cliente",
  "Manage Users": "Administrar usuarios",
  "Default Language": "Idioma predeterminado",
  "Email Notifications": "Notificaciones por correo",
  "Create ticket by new customer": "Crear ticket para nuevo cliente",
  "Create ticket from dashboard": "Crear ticket desde el tablero",
  "Status or priority changes": "Cambio de estado o prioridad",
  "Create a new user": "Crear un nuevo usuario",
  "Email Template": "Plantilla de correo",
  "SMTP Host": "Servidor SMTP",
  "SMTP Port": "Puerto SMTP",
  "SMTP Username": "Usuario SMTP",
  "SMTP Password": "Contraseña SMTP",
  Location: Location$a,
  "Phone number": "Número de teléfono",
  "Email address": "Correo electrónico",
  "Add New": "Agregar nuevo",
  Privacy: Privacy$a,
  Company: Company$a,
  Subscribe: Subscribe$a,
  Login: Login$a,
  "Submit ticket": "Enviar ticket",
  "terms and conditions": "términos y condiciones",
  "I agree with the": "Estoy de acuerdo con",
  "Don’t have account?": "¿No tienes cuenta?",
  "Remember Me": "Recuérdame",
  "Reset Password": "Restablecer contraseña",
  "Already have an account?": "¿Ya tienes una cuenta?",
  "Good Morning": "Buenos días",
  "Good Noon": "Buenas tardes",
  "Good Evening": "Buenas noches",
  "Good Afternoon": "Buenas tardes",
  Hello: Hello$a,
  "Forgot your password?": "¿Olvidaste tu contraseña?",
  "Send Password Reset Link": "Enviar enlace para restablecer contraseña",
  Registration: Registration$a
};
const __vite_glob_1_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Address: Address$a,
  Admin: Admin$a,
  Average: Average$a,
  Blog: Blog$a,
  Cancel: Cancel$a,
  Categories: Categories$a,
  Category: Category$a,
  Chat: Chat$a,
  City: City$a,
  Company: Company$a,
  Contact: Contact$a,
  Contacts: Contacts$a,
  Country: Country$a,
  Create: Create$a,
  Created: Created$a,
  Customer: Customer$a,
  Customers: Customers$a,
  Dashboard: Dashboard$a,
  Day: Day$a,
  Days: Days$a,
  Delete: Delete$a,
  Department: Department$a,
  Departments: Departments$a,
  Details: Details$a,
  Development: Development$a,
  Email: Email$a,
  Event: Event$a,
  FAQ: FAQ$a,
  FAQs: FAQs$a,
  Filter: Filter$a,
  Global: Global$a,
  Hardware: Hardware$a,
  Hello: Hello$a,
  Hour: Hour$a,
  Hours: Hours$a,
  Key: Key$a,
  Location: Location$a,
  Login: Login$a,
  Logout: Logout$a,
  Management: Management$a,
  Minute: Minute$a,
  Minutes: Minutes$a,
  Month: Month$a,
  Months: Months$a,
  More: More$a,
  Name: Name$a,
  Note: Note$a,
  Notes: Notes$a,
  Organization: Organization$a,
  Organizations: Organizations$a,
  Password: Password$a,
  Phone: Phone$a,
  Photo: Photo$a,
  Priorities: Priorities$a,
  Priority: Priority$a,
  Privacy: Privacy$a,
  Province: Province$a,
  Pusher: Pusher$a,
  Registration: Registration$a,
  Reset: Reset$a,
  Role: Role$a,
  Save: Save$a,
  Seconds: Seconds$a,
  Service: Service$a,
  Services: Services$a,
  Settings: Settings$a,
  Software: Software$a,
  State: State$a,
  Status: Status$a,
  Subject: Subject$a,
  Submit: Submit$a,
  Subscribe: Subscribe$a,
  Technical: Technical$a,
  Ticket: Ticket$a,
  Tickets: Tickets$a,
  Title: Title$a,
  Trashed: Trashed$a,
  Types: Types$a,
  Update: Update$a,
  Updated: Updated$a,
  Users: Users$a,
  default: es
}, Symbol.toStringTag, { value: "Module" }));
const Dashboard$9 = "Tableau de bord";
const Logout$9 = "Se déconnecter";
const Tickets$9 = "Tickets";
const Chat$9 = "Chat";
const FAQs$9 = "FAQs";
const Blog$9 = "Blog";
const More$9 = "Plus";
const Notes$9 = "Notes";
const Contacts$9 = "Contacts";
const Organizations$9 = "Organisations";
const Users$9 = "Utilisateurs";
const Customers$9 = "Clients";
const Settings$9 = "Paramètres";
const Global$9 = "Global";
const Categories$9 = "Catégories";
const Status$9 = "Statut";
const Priorities$9 = "Priorités";
const Departments$9 = "Départements";
const Types$9 = "Types";
const Pusher$9 = "Pusher";
const Contact$9 = "Contact";
const Services$9 = "Services";
const Filter$9 = "Filtrer";
const Trashed$9 = "Supprimé";
const Reset$9 = "Réinitialiser";
const Name$9 = "Nom";
const Email$9 = "E-mail";
const Phone$9 = "Téléphone";
const Country$9 = "Pays";
const City$9 = "Ville";
const Address$9 = "Adresse";
const Password$9 = "Mot de passe";
const Role$9 = "Rôle";
const Photo$9 = "Photo";
const Technical$9 = "Technique";
const Hardware$9 = "Matériel";
const Development$9 = "Développement";
const Management$9 = "Gestion";
const Admin$9 = "Administrateur";
const Software$9 = "Logiciel";
const Service$9 = "Service";
const Event$9 = "Événement";
const Average$9 = "Moyenne";
const Seconds$9 = "Secondes";
const Month$9 = "Mois";
const Months$9 = "Mois";
const Day$9 = "Jour";
const Days$9 = "Jours";
const Hours$9 = "Heures";
const Hour$9 = "Heure";
const Minutes$9 = "Minutes";
const Minute$9 = "Minute";
const Key$9 = "Clé";
const Subject$9 = "Sujet";
const Priority$9 = "Priorité";
const Updated$9 = "Mis à jour";
const Customer$9 = "Client";
const Department$9 = "Département";
const Category$9 = "Catégorie";
const Created$9 = "Créé";
const Save$9 = "Enregistrer";
const Ticket$9 = "Ticket";
const FAQ$9 = "FAQ";
const Title$9 = "Titre";
const Details$9 = "Détails";
const Note$9 = "Note";
const Submit$9 = "Soumettre";
const Cancel$9 = "Annuler";
const Organization$9 = "Organisation";
const Province$9 = "Province";
const State$9 = "État";
const Delete$9 = "Supprimer";
const Update$9 = "Mettre à jour";
const Create$9 = "Créer";
const Location$9 = "Emplacement";
const Privacy$9 = "Confidentialité";
const Company$9 = "Entreprise";
const Subscribe$9 = "S'abonner";
const Login$9 = "Connexion";
const Hello$9 = "Hello";
const Registration$9 = "Inscription";
const fr = {
  "Edit Profile": "Modifier le profil",
  Dashboard: Dashboard$9,
  Logout: Logout$9,
  Tickets: Tickets$9,
  Chat: Chat$9,
  FAQs: FAQs$9,
  Blog: Blog$9,
  "Knowledge Base": "Base de connaissances",
  More: More$9,
  Notes: Notes$9,
  Contacts: Contacts$9,
  Organizations: Organizations$9,
  Users: Users$9,
  Customers: Customers$9,
  Settings: Settings$9,
  Global: Global$9,
  Categories: Categories$9,
  Status: Status$9,
  Priorities: Priorities$9,
  Departments: Departments$9,
  Types: Types$9,
  "Email Templates": "Modèles d'email",
  "SMTP Mail": "Courrier SMTP",
  Pusher: Pusher$9,
  "Pusher Chat": "Chat Pusher",
  "Front Pages": "Pages principales",
  Contact: Contact$9,
  Services: Services$9,
  "Privacy Policy": "Politique de confidentialité",
  "Terms of Services": "Conditions d'utilisation",
  Filter: Filter$9,
  Trashed: Trashed$9,
  "Trashed With": "Supprimé avec",
  "Only Trashed": "Uniquement supprimé",
  "Search...": "Rechercher...",
  Reset: Reset$9,
  Name: Name$9,
  Email: Email$9,
  Phone: Phone$9,
  Country: Country$9,
  "Create User": "Créer un utilisateur",
  "First Name": "Prénom",
  "First name": "Prénom",
  "Last Name": "Nom de famille",
  "Last name": "Nom de famille",
  City: City$9,
  Address: Address$9,
  Password: Password$9,
  Role: Role$9,
  Photo: Photo$9,
  "New Tickets": "Nouveaux tickets",
  "Open Tickets": "Tickets ouverts",
  "Closed Tickets": "Tickets fermés",
  "Unassigned Tickets": "Tickets non attribués",
  "Ticket by department": "Ticket par département",
  "Ticket by type": "Ticket par type",
  "Top ticket creator": "Meilleur créateur de tickets",
  "Ticket history": "Historique des tickets",
  "First Response Time": "Temps de première réponse",
  "Last Response Time": "Temps de dernière réponse",
  Technical: Technical$9,
  Hardware: Hardware$9,
  Development: Development$9,
  Management: Management$9,
  Admin: Admin$9,
  Software: Software$9,
  Service: Service$9,
  Event: Event$9,
  Average: Average$9,
  Seconds: Seconds$9,
  "this month": "ce mois-ci",
  "last month": "le mois dernier",
  Month: Month$9,
  Months: Months$9,
  Day: Day$9,
  Days: Days$9,
  Hours: Hours$9,
  Hour: Hour$9,
  Minutes: Minutes$9,
  Minute: Minute$9,
  Key: Key$9,
  Subject: Subject$9,
  "Attach files": "Joindre des fichiers",
  Priority: Priority$9,
  "Date": "Date",
  Updated: Updated$9,
  Customer: Customer$9,
  Department: Department$9,
  "Assigned to": "Attribué à",
  "Ticket type": "Type de ticket",
  Category: Category$9,
  Created: Created$9,
  "Request Details": "Détails de la demande",
  "Attach File": "Joindre un fichier",
  "Delete Ticket": "Supprimer le ticket",
  Save: Save$9,
  "Ticket discussion": "Discussion sur le ticket",
  Ticket: Ticket$9,
  FAQ: FAQ$9,
  "Create Ticket": "Créer un ticket",
  "New Ticket": "Nouveau ticket",
  "Create FAQ": "Créer une FAQ",
  "Filter by priority": "Filtrer par priorité",
  "Filter by status": "Filtrer par statut",
  "Delete FAQ": "Supprimer la FAQ",
  Title: Title$9,
  Details: Details$9,
  Note: Note$9,
  Submit: Submit$9,
  Cancel: Cancel$9,
  "Delete note": "Supprimer la note",
  Organization: Organization$9,
  Province: Province$9,
  State: State$9,
  "Postal code": "Code postal",
  "Delete Organization": "Supprimer l'organisation",
  "Update Organization": "Mettre à jour l'organisation",
  Delete: Delete$9,
  Update: Update$9,
  Create: Create$9,
  "Create Customer": "Créer un client",
  "Manage Users": "Gérer les utilisateurs",
  "Default Language": "Langue par défaut",
  "Email Notifications": "Notifications par e-mail",
  "Create ticket by new customer": "Créer un ticket par un nouveau client",
  "Create ticket from dashboard": "Créer un ticket depuis le tableau de bord",
  "Status or priority changes": "Changement de statut ou de priorité",
  "Create a new user": "Créer un nouvel utilisateur",
  "Email Template": "Modèle d'e-mail",
  "SMTP Host": "Hôte SMTP",
  "SMTP Port": "Port SMTP",
  "SMTP Username": "Nom d'utilisateur SMTP",
  "SMTP Password": "Mot de passe SMTP",
  Location: Location$9,
  "Phone number": "Numéro de téléphone",
  "Email address": "Adresse e-mail",
  "Add New": "Ajouter",
  Privacy: Privacy$9,
  Company: Company$9,
  Subscribe: Subscribe$9,
  Login: Login$9,
  "Submit ticket": "Soumettre un ticket",
  "terms and conditions": "termes et conditions",
  "I agree with the": "J'accepte les",
  "Don’t have account?": "Vous n'avez pas de compte?",
  "Remember Me": "Se souvenir de moi",
  "Reset Password": "Réinitialisation du mot de passe",
  "Already have an account?": "Vous avez déjà un compte ?",
  "Good Morning": "Bonjour",
  "Good Noon": "Bon après-midi",
  "Good Evening": "Bonsoir",
  "Good Afternoon": "Bon après-midi",
  Hello: Hello$9,
  "Forgot your password?": "Mot de passe oublié?",
  "Send Password Reset Link": "Envoyer le lien de réinitialisation du mot de passe",
  Registration: Registration$9
};
const __vite_glob_1_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Address: Address$9,
  Admin: Admin$9,
  Average: Average$9,
  Blog: Blog$9,
  Cancel: Cancel$9,
  Categories: Categories$9,
  Category: Category$9,
  Chat: Chat$9,
  City: City$9,
  Company: Company$9,
  Contact: Contact$9,
  Contacts: Contacts$9,
  Country: Country$9,
  Create: Create$9,
  Created: Created$9,
  Customer: Customer$9,
  Customers: Customers$9,
  Dashboard: Dashboard$9,
  Day: Day$9,
  Days: Days$9,
  Delete: Delete$9,
  Department: Department$9,
  Departments: Departments$9,
  Details: Details$9,
  Development: Development$9,
  Email: Email$9,
  Event: Event$9,
  FAQ: FAQ$9,
  FAQs: FAQs$9,
  Filter: Filter$9,
  Global: Global$9,
  Hardware: Hardware$9,
  Hello: Hello$9,
  Hour: Hour$9,
  Hours: Hours$9,
  Key: Key$9,
  Location: Location$9,
  Login: Login$9,
  Logout: Logout$9,
  Management: Management$9,
  Minute: Minute$9,
  Minutes: Minutes$9,
  Month: Month$9,
  Months: Months$9,
  More: More$9,
  Name: Name$9,
  Note: Note$9,
  Notes: Notes$9,
  Organization: Organization$9,
  Organizations: Organizations$9,
  Password: Password$9,
  Phone: Phone$9,
  Photo: Photo$9,
  Priorities: Priorities$9,
  Priority: Priority$9,
  Privacy: Privacy$9,
  Province: Province$9,
  Pusher: Pusher$9,
  Registration: Registration$9,
  Reset: Reset$9,
  Role: Role$9,
  Save: Save$9,
  Seconds: Seconds$9,
  Service: Service$9,
  Services: Services$9,
  Settings: Settings$9,
  Software: Software$9,
  State: State$9,
  Status: Status$9,
  Subject: Subject$9,
  Submit: Submit$9,
  Subscribe: Subscribe$9,
  Technical: Technical$9,
  Ticket: Ticket$9,
  Tickets: Tickets$9,
  Title: Title$9,
  Trashed: Trashed$9,
  Types: Types$9,
  Update: Update$9,
  Updated: Updated$9,
  Users: Users$9,
  default: fr
}, Symbol.toStringTag, { value: "Module" }));
const Dashboard$8 = "לוח מחוונים";
const Logout$8 = "התנתקות";
const Tickets$8 = "כרטיסים";
const Chat$8 = "צ'אט";
const FAQs$8 = "שאלות נפוצות";
const Blog$8 = "בלוג";
const More$8 = "עוד";
const Notes$8 = "הערות";
const Contacts$8 = "אנשי קשר";
const Organizations$8 = "ארגונים";
const Users$8 = "משתמשים";
const Customers$8 = "לקוחות";
const Settings$8 = "הגדרות";
const Global$8 = "גלובלי";
const Categories$8 = "קטגוריות";
const Status$8 = "סטטוס";
const Priorities$8 = "עדיפויות";
const Departments$8 = "מחלקות";
const Types$8 = "סוגים";
const Pusher$8 = "פושר";
const Contact$8 = "צור קשר";
const Services$8 = "שירותים";
const Filter$8 = "סינון";
const Trashed$8 = "נמחק";
const Reset$8 = "איפוס";
const Name$8 = "שם";
const Email$8 = "אימייל";
const Phone$8 = "טלפון";
const Country$8 = "מדינה";
const City$8 = "עיר";
const Address$8 = "כתובת";
const Password$8 = "סיסמה";
const Role$8 = "תפקיד";
const Photo$8 = "תמונה";
const Technical$8 = "טכני";
const Hardware$8 = "חומרה";
const Development$8 = "פיתוח";
const Management$8 = "ניהול";
const Admin$8 = "מנהל";
const Software$8 = "תוכנה";
const Service$8 = "שירות";
const Event$8 = "אירוע";
const Average$8 = "ממוצע";
const Seconds$8 = "שניות";
const Month$8 = "חודש";
const Months$8 = "חודשים";
const Day$8 = "יום";
const Days$8 = "ימים";
const Hours$8 = "שעות";
const Hour$8 = "שעה";
const Minutes$8 = "דקות";
const Minute$8 = "דקה";
const Key$8 = "מפתח";
const Subject$8 = "נושא";
const Priority$8 = "עדיפות";
const Updated$8 = "עודכן";
const Customer$8 = "לקוח";
const Department$8 = "מחלקה";
const Category$8 = "קטגוריה";
const Created$8 = "נוצר";
const Save$8 = "שמור";
const Ticket$8 = "כרטיס";
const FAQ$8 = "שאלות נפוצות";
const Title$8 = "כותרת";
const Details$8 = "פרטים";
const Note$8 = "הערה";
const Submit$8 = "שלח";
const Cancel$8 = "ביטול";
const Organization$8 = "ארגון";
const Province$8 = "מחוז";
const State$8 = "מדינה";
const Delete$8 = "מחק";
const Update$8 = "עדכן";
const Create$8 = "צור";
const Location$8 = "מיקום";
const Privacy$8 = "פרטיות";
const Company$8 = "חברה";
const Subscribe$8 = "הירשם";
const Login$8 = "התחבר";
const Hello$8 = "שלום";
const Registration$8 = "הרשמה";
const he = {
  "Edit Profile": "ערוך פרופיל",
  Dashboard: Dashboard$8,
  Logout: Logout$8,
  Tickets: Tickets$8,
  Chat: Chat$8,
  FAQs: FAQs$8,
  Blog: Blog$8,
  "Knowledge Base": "בסיס ידע",
  More: More$8,
  Notes: Notes$8,
  Contacts: Contacts$8,
  Organizations: Organizations$8,
  Users: Users$8,
  Customers: Customers$8,
  Settings: Settings$8,
  Global: Global$8,
  Categories: Categories$8,
  Status: Status$8,
  Priorities: Priorities$8,
  Departments: Departments$8,
  Types: Types$8,
  "Email Templates": "תבניות אימייל",
  "SMTP Mail": "דואר SMTP",
  Pusher: Pusher$8,
  "Pusher Chat": "צ'אט פושר",
  "Front Pages": "עמודים ראשיים",
  Contact: Contact$8,
  Services: Services$8,
  "Privacy Policy": "מדיניות פרטיות",
  "Terms of Services": "תנאי שירות",
  Filter: Filter$8,
  Trashed: Trashed$8,
  "Trashed With": "נמחק עם",
  "Only Trashed": "רק נמחק",
  "Search...": "חיפוש...",
  Reset: Reset$8,
  Name: Name$8,
  Email: Email$8,
  Phone: Phone$8,
  Country: Country$8,
  "Create User": "צור משתמש",
  "First Name": "שם פרטי",
  "First name": "שם פרטי",
  "Last Name": "שם משפחה",
  "Last name": "שם משפחה",
  City: City$8,
  Address: Address$8,
  Password: Password$8,
  Role: Role$8,
  Photo: Photo$8,
  "New Tickets": "כרטיסים חדשים",
  "Open Tickets": "כרטיסים פתוחים",
  "Closed Tickets": "כרטיסים סגורים",
  "Unassigned Tickets": "כרטיסים לא מוקצים",
  "Ticket by department": "כרטיס לפי מחלקה",
  "Ticket by type": "כרטיס לפי סוג",
  "Top ticket creator": "יוצר הכרטיסים המוביל",
  "Ticket history": "היסטוריית כרטיסים",
  "First Response Time": "זמן תגובה ראשוני",
  "Last Response Time": "זמן תגובה אחרון",
  Technical: Technical$8,
  Hardware: Hardware$8,
  Development: Development$8,
  Management: Management$8,
  Admin: Admin$8,
  Software: Software$8,
  Service: Service$8,
  Event: Event$8,
  Average: Average$8,
  Seconds: Seconds$8,
  "this month": "החודש",
  "last month": "החודש שעבר",
  Month: Month$8,
  Months: Months$8,
  Day: Day$8,
  Days: Days$8,
  Hours: Hours$8,
  Hour: Hour$8,
  Minutes: Minutes$8,
  Minute: Minute$8,
  Key: Key$8,
  Subject: Subject$8,
  "Attach files": "צרף קבצים",
  Priority: Priority$8,
  "Date": "תאריך",
  Updated: Updated$8,
  Customer: Customer$8,
  Department: Department$8,
  "Assigned to": "מוקצה ל",
  "Ticket type": "סוג כרטיס",
  Category: Category$8,
  Created: Created$8,
  "Request Details": "פרטי בקשה",
  "Attach File": "צרף קובץ",
  "Delete Ticket": "מחק כרטיס",
  Save: Save$8,
  "Ticket discussion": "דיון בכרטיס",
  Ticket: Ticket$8,
  FAQ: FAQ$8,
  "Create Ticket": "צור כרטיס",
  "New Ticket": "כרטיס חדש",
  "Create FAQ": "צור שאלות נפוצות",
  "Filter by priority": "סינון לפי עדיפות",
  "Filter by status": "סינון לפי סטטוס",
  "Delete FAQ": "מחק שאלות נפוצות",
  Title: Title$8,
  Details: Details$8,
  Note: Note$8,
  Submit: Submit$8,
  Cancel: Cancel$8,
  "Delete note": "מחק הערה",
  Organization: Organization$8,
  Province: Province$8,
  State: State$8,
  "Postal code": "מיקוד",
  "Delete Organization": "מחק ארגון",
  "Update Organization": "עדכן ארגון",
  Delete: Delete$8,
  Update: Update$8,
  Create: Create$8,
  "Create Customer": "צור לקוח",
  "Manage Users": "ניהול משתמשים",
  "Default Language": "שפת ברירת מחדל",
  "Email Notifications": "התראות במייל",
  "Create ticket by new customer": "צור כרטיס ללקוח חדש",
  "Create ticket from dashboard": "צור כרטיס מלוח המחוונים",
  "Status or priority changes": "שינוי סטטוס או עדיפות",
  "Create a new user": "צור משתמש חדש",
  "Email Template": "תבנית אימייל",
  "SMTP Host": "שרת SMTP",
  "SMTP Port": "יציאת SMTP",
  "SMTP Username": "שם משתמש SMTP",
  "SMTP Password": "סיסמת SMTP",
  Location: Location$8,
  "Phone number": "מספר טלפון",
  "Email address": "כתובת אימייל",
  "Add New": "הוסף חדש",
  Privacy: Privacy$8,
  Company: Company$8,
  Subscribe: Subscribe$8,
  Login: Login$8,
  "Submit ticket": "שלח כרטיס",
  "terms and conditions": "תנאים והגבלות",
  "I agree with the": "אני מסכים ל",
  "Don’t have account?": "אין לך חשבון?",
  "Remember Me": "זכור אותי",
  "Reset Password": "אפס סיסמה",
  "Already have an account?": "כבר יש לך חשבון?",
  "Good Morning": "בוקר טוב",
  "Good Noon": "צהריים טובים",
  "Good Evening": "ערב טוב",
  "Good Afternoon": "אחר הצהריים טובים",
  Hello: Hello$8,
  "Forgot your password?": "שכחת את הסיסמה שלך?",
  "Send Password Reset Link": "שלח קישור לאיפוס סיסמה",
  Registration: Registration$8
};
const __vite_glob_1_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Address: Address$8,
  Admin: Admin$8,
  Average: Average$8,
  Blog: Blog$8,
  Cancel: Cancel$8,
  Categories: Categories$8,
  Category: Category$8,
  Chat: Chat$8,
  City: City$8,
  Company: Company$8,
  Contact: Contact$8,
  Contacts: Contacts$8,
  Country: Country$8,
  Create: Create$8,
  Created: Created$8,
  Customer: Customer$8,
  Customers: Customers$8,
  Dashboard: Dashboard$8,
  Day: Day$8,
  Days: Days$8,
  Delete: Delete$8,
  Department: Department$8,
  Departments: Departments$8,
  Details: Details$8,
  Development: Development$8,
  Email: Email$8,
  Event: Event$8,
  FAQ: FAQ$8,
  FAQs: FAQs$8,
  Filter: Filter$8,
  Global: Global$8,
  Hardware: Hardware$8,
  Hello: Hello$8,
  Hour: Hour$8,
  Hours: Hours$8,
  Key: Key$8,
  Location: Location$8,
  Login: Login$8,
  Logout: Logout$8,
  Management: Management$8,
  Minute: Minute$8,
  Minutes: Minutes$8,
  Month: Month$8,
  Months: Months$8,
  More: More$8,
  Name: Name$8,
  Note: Note$8,
  Notes: Notes$8,
  Organization: Organization$8,
  Organizations: Organizations$8,
  Password: Password$8,
  Phone: Phone$8,
  Photo: Photo$8,
  Priorities: Priorities$8,
  Priority: Priority$8,
  Privacy: Privacy$8,
  Province: Province$8,
  Pusher: Pusher$8,
  Registration: Registration$8,
  Reset: Reset$8,
  Role: Role$8,
  Save: Save$8,
  Seconds: Seconds$8,
  Service: Service$8,
  Services: Services$8,
  Settings: Settings$8,
  Software: Software$8,
  State: State$8,
  Status: Status$8,
  Subject: Subject$8,
  Submit: Submit$8,
  Subscribe: Subscribe$8,
  Technical: Technical$8,
  Ticket: Ticket$8,
  Tickets: Tickets$8,
  Title: Title$8,
  Trashed: Trashed$8,
  Types: Types$8,
  Update: Update$8,
  Updated: Updated$8,
  Users: Users$8,
  default: he
}, Symbol.toStringTag, { value: "Module" }));
const Dashboard$7 = "Dashboard";
const Logout$7 = "Disconnetti";
const Tickets$7 = "Biglietti";
const Chat$7 = "Chat";
const FAQs$7 = "Domande frequenti";
const Blog$7 = "Blog";
const More$7 = "Altro";
const Notes$7 = "Note";
const Contacts$7 = "Contatti";
const Organizations$7 = "Organizzazioni";
const Users$7 = "Utenti";
const Customers$7 = "Clienti";
const Settings$7 = "Impostazioni";
const Global$7 = "Globale";
const Categories$7 = "Categorie";
const Status$7 = "Stato";
const Priorities$7 = "Priorità";
const Departments$7 = "Dipartimenti";
const Types$7 = "Tipi";
const Pusher$7 = "Pusher";
const Contact$7 = "Contatto";
const Services$7 = "Servizi";
const Filter$7 = "Filtro";
const Trashed$7 = "Cestinato";
const Reset$7 = "Reimposta";
const Name$7 = "Nome";
const Email$7 = "Email";
const Phone$7 = "Telefono";
const Country$7 = "Paese";
const City$7 = "Città";
const Address$7 = "Indirizzo";
const Password$7 = "Password";
const Role$7 = "Ruolo";
const Photo$7 = "Foto";
const Technical$7 = "Tecnico";
const Hardware$7 = "Hardware";
const Development$7 = "Sviluppo";
const Management$7 = "Gestione";
const Admin$7 = "Amministratore";
const Software$7 = "Software";
const Service$7 = "Servizio";
const Event$7 = "Evento";
const Average$7 = "Media";
const Seconds$7 = "Secondi";
const Month$7 = "Mese";
const Months$7 = "Mesi";
const Day$7 = "Giorno";
const Days$7 = "Giorni";
const Hours$7 = "Ore";
const Hour$7 = "Ora";
const Minutes$7 = "Minuti";
const Minute$7 = "Minuto";
const Key$7 = "Chiave";
const Subject$7 = "Oggetto";
const Priority$7 = "Priorità";
const Updated$7 = "Aggiornato";
const Customer$7 = "Cliente";
const Department$7 = "Dipartimento";
const Category$7 = "Categoria";
const Created$7 = "Creato";
const Save$7 = "Salva";
const Ticket$7 = "Biglietto";
const FAQ$7 = "FAQ";
const Title$7 = "Titolo";
const Details$7 = "Dettagli";
const Note$7 = "Nota";
const Submit$7 = "Invia";
const Cancel$7 = "Annulla";
const Organization$7 = "Organizzazione";
const Province$7 = "Provincia";
const State$7 = "Stato";
const Delete$7 = "Elimina";
const Update$7 = "Aggiorna";
const Create$7 = "Crea";
const Location$7 = "Posizione";
const Privacy$7 = "Privacy";
const Company$7 = "Azienda";
const Subscribe$7 = "Iscriviti";
const Login$7 = "Accedi";
const Hello$7 = "Ciao";
const Registration$7 = "Registrazione";
const it = {
  "Edit Profile": "Modifica profilo",
  Dashboard: Dashboard$7,
  Logout: Logout$7,
  Tickets: Tickets$7,
  Chat: Chat$7,
  FAQs: FAQs$7,
  Blog: Blog$7,
  "Knowledge Base": "Base di conoscenza",
  More: More$7,
  Notes: Notes$7,
  Contacts: Contacts$7,
  Organizations: Organizations$7,
  Users: Users$7,
  Customers: Customers$7,
  Settings: Settings$7,
  Global: Global$7,
  Categories: Categories$7,
  Status: Status$7,
  Priorities: Priorities$7,
  Departments: Departments$7,
  Types: Types$7,
  "Email Templates": "Modelli email",
  "SMTP Mail": "Posta SMTP",
  Pusher: Pusher$7,
  "Pusher Chat": "Chat Pusher",
  "Front Pages": "Pagine principali",
  Contact: Contact$7,
  Services: Services$7,
  "Privacy Policy": "Informativa sulla privacy",
  "Terms of Services": "Termini di servizio",
  Filter: Filter$7,
  Trashed: Trashed$7,
  "Trashed With": "Cestinato con",
  "Only Trashed": "Solo cestinato",
  "Search...": "Cerca...",
  Reset: Reset$7,
  Name: Name$7,
  Email: Email$7,
  Phone: Phone$7,
  Country: Country$7,
  "Create User": "Crea utente",
  "First Name": "Nome",
  "First name": "Nome",
  "Last Name": "Cognome",
  "Last name": "Cognome",
  City: City$7,
  Address: Address$7,
  Password: Password$7,
  Role: Role$7,
  Photo: Photo$7,
  "New Tickets": "Nuovi biglietti",
  "Open Tickets": "Biglietti aperti",
  "Closed Tickets": "Biglietti chiusi",
  "Unassigned Tickets": "Biglietti non assegnati",
  "Ticket by department": "Biglietti per dipartimento",
  "Ticket by type": "Biglietti per tipo",
  "Top ticket creator": "Maggior creatore di biglietti",
  "Ticket history": "Storico biglietti",
  "First Response Time": "Tempo di prima risposta",
  "Last Response Time": "Tempo di ultima risposta",
  Technical: Technical$7,
  Hardware: Hardware$7,
  Development: Development$7,
  Management: Management$7,
  Admin: Admin$7,
  Software: Software$7,
  Service: Service$7,
  Event: Event$7,
  Average: Average$7,
  Seconds: Seconds$7,
  "this month": "questo mese",
  "last month": "mese scorso",
  Month: Month$7,
  Months: Months$7,
  Day: Day$7,
  Days: Days$7,
  Hours: Hours$7,
  Hour: Hour$7,
  Minutes: Minutes$7,
  Minute: Minute$7,
  Key: Key$7,
  Subject: Subject$7,
  "Attach files": "Allega file",
  Priority: Priority$7,
  "Date": "Data",
  Updated: Updated$7,
  Customer: Customer$7,
  Department: Department$7,
  "Assigned to": "Assegnato a",
  "Ticket type": "Tipo di biglietto",
  Category: Category$7,
  Created: Created$7,
  "Request Details": "Dettagli della richiesta",
  "Attach File": "Allega file",
  "Delete Ticket": "Elimina biglietto",
  Save: Save$7,
  "Ticket discussion": "Discussione biglietto",
  Ticket: Ticket$7,
  FAQ: FAQ$7,
  "Create Ticket": "Crea biglietto",
  "New Ticket": "Nuovo biglietto",
  "Create FAQ": "Crea FAQ",
  "Filter by priority": "Filtra per priorità",
  "Filter by status": "Filtra per stato",
  "Delete FAQ": "Elimina FAQ",
  Title: Title$7,
  Details: Details$7,
  Note: Note$7,
  Submit: Submit$7,
  Cancel: Cancel$7,
  "Delete note": "Elimina nota",
  Organization: Organization$7,
  Province: Province$7,
  State: State$7,
  "Postal code": "Codice postale",
  "Delete Organization": "Elimina organizzazione",
  "Update Organization": "Aggiorna organizzazione",
  Delete: Delete$7,
  Update: Update$7,
  Create: Create$7,
  "Create Customer": "Crea cliente",
  "Manage Users": "Gestisci utenti",
  "Default Language": "Lingua predefinita",
  "Email Notifications": "Notifiche email",
  "Create ticket by new customer": "Crea biglietto per nuovo cliente",
  "Create ticket from dashboard": "Crea biglietto dalla dashboard",
  "Status or priority changes": "Modifiche di stato o priorità",
  "Create a new user": "Crea un nuovo utente",
  "Email Template": "Modello email",
  "SMTP Host": "Host SMTP",
  "SMTP Port": "Porta SMTP",
  "SMTP Username": "Nome utente SMTP",
  "SMTP Password": "Password SMTP",
  Location: Location$7,
  "Phone number": "Numero di telefono",
  "Email address": "Indirizzo email",
  "Add New": "Aggiungi nuovo",
  Privacy: Privacy$7,
  Company: Company$7,
  Subscribe: Subscribe$7,
  Login: Login$7,
  "Submit ticket": "Invia biglietto",
  "terms and conditions": "termini e condizioni",
  "I agree with the": "Accetto",
  "Don’t have account?": "Non hai un account?",
  "Remember Me": "Ricordami",
  "Reset Password": "Reimposta password",
  "Already have an account?": "Hai già un account?",
  "Good Morning": "Buongiorno",
  "Good Noon": "Buon mezzogiorno",
  "Good Evening": "Buonasera",
  "Good Afternoon": "Buon pomeriggio",
  Hello: Hello$7,
  "Forgot your password?": "Hai dimenticato la password?",
  "Send Password Reset Link": "Invia link per reimpostare la password",
  Registration: Registration$7
};
const __vite_glob_1_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Address: Address$7,
  Admin: Admin$7,
  Average: Average$7,
  Blog: Blog$7,
  Cancel: Cancel$7,
  Categories: Categories$7,
  Category: Category$7,
  Chat: Chat$7,
  City: City$7,
  Company: Company$7,
  Contact: Contact$7,
  Contacts: Contacts$7,
  Country: Country$7,
  Create: Create$7,
  Created: Created$7,
  Customer: Customer$7,
  Customers: Customers$7,
  Dashboard: Dashboard$7,
  Day: Day$7,
  Days: Days$7,
  Delete: Delete$7,
  Department: Department$7,
  Departments: Departments$7,
  Details: Details$7,
  Development: Development$7,
  Email: Email$7,
  Event: Event$7,
  FAQ: FAQ$7,
  FAQs: FAQs$7,
  Filter: Filter$7,
  Global: Global$7,
  Hardware: Hardware$7,
  Hello: Hello$7,
  Hour: Hour$7,
  Hours: Hours$7,
  Key: Key$7,
  Location: Location$7,
  Login: Login$7,
  Logout: Logout$7,
  Management: Management$7,
  Minute: Minute$7,
  Minutes: Minutes$7,
  Month: Month$7,
  Months: Months$7,
  More: More$7,
  Name: Name$7,
  Note: Note$7,
  Notes: Notes$7,
  Organization: Organization$7,
  Organizations: Organizations$7,
  Password: Password$7,
  Phone: Phone$7,
  Photo: Photo$7,
  Priorities: Priorities$7,
  Priority: Priority$7,
  Privacy: Privacy$7,
  Province: Province$7,
  Pusher: Pusher$7,
  Registration: Registration$7,
  Reset: Reset$7,
  Role: Role$7,
  Save: Save$7,
  Seconds: Seconds$7,
  Service: Service$7,
  Services: Services$7,
  Settings: Settings$7,
  Software: Software$7,
  State: State$7,
  Status: Status$7,
  Subject: Subject$7,
  Submit: Submit$7,
  Subscribe: Subscribe$7,
  Technical: Technical$7,
  Ticket: Ticket$7,
  Tickets: Tickets$7,
  Title: Title$7,
  Trashed: Trashed$7,
  Types: Types$7,
  Update: Update$7,
  Updated: Updated$7,
  Users: Users$7,
  default: it
}, Symbol.toStringTag, { value: "Module" }));
const Dashboard$6 = "Prietaisų skydelis";
const Logout$6 = "Atsijungti";
const Tickets$6 = "Bilietai";
const Chat$6 = "Pokalbis";
const FAQs$6 = "DUK";
const Blog$6 = "Tinklaraštis";
const More$6 = "Daugiau";
const Notes$6 = "Pastabos";
const Contacts$6 = "Kontaktai";
const Organizations$6 = "Organizacijos";
const Users$6 = "Vartotojai";
const Customers$6 = "Klientai";
const Settings$6 = "Nustatymai";
const Global$6 = "Visuotiniai";
const Categories$6 = "Kategorijos";
const Status$6 = "Būsena";
const Priorities$6 = "Prioritetai";
const Departments$6 = "Skyriai";
const Types$6 = "Tipai";
const Pusher$6 = "Pusher";
const Contact$6 = "Kontaktas";
const Services$6 = "Paslaugos";
const Filter$6 = "Filtruoti";
const Trashed$6 = "Ištrinta";
const Reset$6 = "Atstatyti";
const Name$6 = "Vardas";
const Email$6 = "El. paštas";
const Phone$6 = "Telefonas";
const Country$6 = "Šalis";
const City$6 = "Miestas";
const Address$6 = "Adresas";
const Password$6 = "Slaptažodis";
const Role$6 = "Vaidmuo";
const Photo$6 = "Nuotrauka";
const Technical$6 = "Techninis";
const Hardware$6 = "Aparatinė įranga";
const Development$6 = "Plėtra";
const Management$6 = "Valdymas";
const Admin$6 = "Administratorius";
const Software$6 = "Programinė įranga";
const Service$6 = "Paslauga";
const Event$6 = "Renginys";
const Average$6 = "Vidutinis";
const Seconds$6 = "Sekundės";
const Month$6 = "Mėnuo";
const Months$6 = "Mėnesiai";
const Day$6 = "Diena";
const Days$6 = "Dienos";
const Hours$6 = "Valandos";
const Hour$6 = "Valanda";
const Minutes$6 = "Minutės";
const Minute$6 = "Minutė";
const Key$6 = "Raktas";
const Subject$6 = "Tema";
const Priority$6 = "Prioritetas";
const Updated$6 = "Atnaujinta";
const Customer$6 = "Klientas";
const Department$6 = "Skyrius";
const Category$6 = "Kategorija";
const Created$6 = "Sukurta";
const Save$6 = "Išsaugoti";
const Ticket$6 = "Bilietas";
const FAQ$6 = "DUK";
const Title$6 = "Pavadinimas";
const Details$6 = "Išsami informacija";
const Note$6 = "Pastaba";
const Submit$6 = "Pateikti";
const Cancel$6 = "Atšaukti";
const Organization$6 = "Organizacija";
const Province$6 = "Apskritis";
const State$6 = "Valstija";
const Delete$6 = "Ištrinti";
const Update$6 = "Atnaujinti";
const Create$6 = "Sukurti";
const Location$6 = "Vieta";
const Privacy$6 = "Privatumas";
const Company$6 = "Įmonė";
const Subscribe$6 = "Prenumeruoti";
const Login$6 = "Prisijungti";
const Hello$6 = "Labas";
const Registration$6 = "Registracija";
const lt = {
  "Edit Profile": "Redaguoti profilį",
  Dashboard: Dashboard$6,
  Logout: Logout$6,
  Tickets: Tickets$6,
  Chat: Chat$6,
  FAQs: FAQs$6,
  Blog: Blog$6,
  "Knowledge Base": "Žinių bazė",
  More: More$6,
  Notes: Notes$6,
  Contacts: Contacts$6,
  Organizations: Organizations$6,
  Users: Users$6,
  Customers: Customers$6,
  Settings: Settings$6,
  Global: Global$6,
  Categories: Categories$6,
  Status: Status$6,
  Priorities: Priorities$6,
  Departments: Departments$6,
  Types: Types$6,
  "Email Templates": "El. pašto šablonai",
  "SMTP Mail": "SMTP paštas",
  Pusher: Pusher$6,
  "Pusher Chat": "Pusher pokalbis",
  "Front Pages": "Priekiniai puslapiai",
  Contact: Contact$6,
  Services: Services$6,
  "Privacy Policy": "Privatumo politika",
  "Terms of Services": "Paslaugų sąlygos",
  Filter: Filter$6,
  Trashed: Trashed$6,
  "Trashed With": "Ištrinta su",
  "Only Trashed": "Tik ištrinti",
  "Search...": "Paieška...",
  Reset: Reset$6,
  Name: Name$6,
  Email: Email$6,
  Phone: Phone$6,
  Country: Country$6,
  "Create User": "Sukurti vartotoją",
  "First Name": "Vardas",
  "First name": "Vardas",
  "Last Name": "Pavardė",
  "Last name": "Pavardė",
  City: City$6,
  Address: Address$6,
  Password: Password$6,
  Role: Role$6,
  Photo: Photo$6,
  "New Tickets": "Nauji bilietai",
  "Open Tickets": "Atidaryti bilietai",
  "Closed Tickets": "Uždaryti bilietai",
  "Unassigned Tickets": "Nepriskirti bilietai",
  "Ticket by department": "Bilietas pagal skyrių",
  "Ticket by type": "Bilietas pagal tipą",
  "Top ticket creator": "Geriausias bilietų kūrėjas",
  "Ticket history": "Bilietų istorija",
  "First Response Time": "Pirmasis atsakymo laikas",
  "Last Response Time": "Paskutinis atsakymo laikas",
  Technical: Technical$6,
  Hardware: Hardware$6,
  Development: Development$6,
  Management: Management$6,
  Admin: Admin$6,
  Software: Software$6,
  Service: Service$6,
  Event: Event$6,
  Average: Average$6,
  Seconds: Seconds$6,
  "this month": "šį mėnesį",
  "last month": "praeitą mėnesį",
  Month: Month$6,
  Months: Months$6,
  Day: Day$6,
  Days: Days$6,
  Hours: Hours$6,
  Hour: Hour$6,
  Minutes: Minutes$6,
  Minute: Minute$6,
  Key: Key$6,
  Subject: Subject$6,
  "Attach files": "Prisegti failus",
  Priority: Priority$6,
  "Date": "Data",
  Updated: Updated$6,
  Customer: Customer$6,
  Department: Department$6,
  "Assigned to": "Priskirta",
  "Ticket type": "Bilieto tipas",
  Category: Category$6,
  Created: Created$6,
  "Request Details": "Užklausos informacija",
  "Attach File": "Prisegti failą",
  "Delete Ticket": "Ištrinti bilietą",
  Save: Save$6,
  "Ticket discussion": "Bilietų diskusija",
  Ticket: Ticket$6,
  FAQ: FAQ$6,
  "Create Ticket": "Sukurti bilietą",
  "New Ticket": "Naujas bilietas",
  "Create FAQ": "Sukurti DUK",
  "Filter by priority": "Filtruoti pagal prioritetą",
  "Filter by status": "Filtruoti pagal būseną",
  "Delete FAQ": "Ištrinti DUK",
  Title: Title$6,
  Details: Details$6,
  Note: Note$6,
  Submit: Submit$6,
  Cancel: Cancel$6,
  "Delete note": "Ištrinti pastabą",
  Organization: Organization$6,
  Province: Province$6,
  State: State$6,
  "Postal code": "Pašto kodas",
  "Delete Organization": "Ištrinti organizaciją",
  "Update Organization": "Atnaujinti organizaciją",
  Delete: Delete$6,
  Update: Update$6,
  Create: Create$6,
  "Create Customer": "Sukurti klientą",
  "Manage Users": "Tvarkyti vartotojus",
  "Default Language": "Numatytoji kalba",
  "Email Notifications": "El. pašto pranešimai",
  "Create ticket by new customer": "Sukurti bilietą naujam klientui",
  "Create ticket from dashboard": "Sukurti bilietą iš prietaisų skydelio",
  "Status or priority changes": "Būsenos ar prioriteto pakeitimai",
  "Create a new user": "Sukurti naują vartotoją",
  "Email Template": "El. pašto šablonas",
  "SMTP Host": "SMTP serveris",
  "SMTP Port": "SMTP prievadas",
  "SMTP Username": "SMTP vartotojo vardas",
  "SMTP Password": "SMTP slaptažodis",
  Location: Location$6,
  "Phone number": "Telefono numeris",
  "Email address": "El. pašto adresas",
  "Add New": "Pridėti naują",
  Privacy: Privacy$6,
  Company: Company$6,
  Subscribe: Subscribe$6,
  Login: Login$6,
  "Submit ticket": "Pateikti bilietą",
  "terms and conditions": "Taisyklės ir sąlygos",
  "I agree with the": "Aš sutinku su",
  "Don’t have account?": "Neturite paskyros?",
  "Remember Me": "Prisiminti mane",
  "Reset Password": "Atkurti slaptažodį",
  "Already have an account?": "Jau turite paskyrą?",
  "Good Morning": "Labas rytas",
  "Good Noon": "Gera diena",
  "Good Evening": "Labas vakaras",
  "Good Afternoon": "Gera popietė",
  Hello: Hello$6,
  "Forgot your password?": "Pamiršote slaptažodį?",
  "Send Password Reset Link": "Siųsti slaptažodžio atkūrimo nuorodą",
  Registration: Registration$6
};
const __vite_glob_1_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Address: Address$6,
  Admin: Admin$6,
  Average: Average$6,
  Blog: Blog$6,
  Cancel: Cancel$6,
  Categories: Categories$6,
  Category: Category$6,
  Chat: Chat$6,
  City: City$6,
  Company: Company$6,
  Contact: Contact$6,
  Contacts: Contacts$6,
  Country: Country$6,
  Create: Create$6,
  Created: Created$6,
  Customer: Customer$6,
  Customers: Customers$6,
  Dashboard: Dashboard$6,
  Day: Day$6,
  Days: Days$6,
  Delete: Delete$6,
  Department: Department$6,
  Departments: Departments$6,
  Details: Details$6,
  Development: Development$6,
  Email: Email$6,
  Event: Event$6,
  FAQ: FAQ$6,
  FAQs: FAQs$6,
  Filter: Filter$6,
  Global: Global$6,
  Hardware: Hardware$6,
  Hello: Hello$6,
  Hour: Hour$6,
  Hours: Hours$6,
  Key: Key$6,
  Location: Location$6,
  Login: Login$6,
  Logout: Logout$6,
  Management: Management$6,
  Minute: Minute$6,
  Minutes: Minutes$6,
  Month: Month$6,
  Months: Months$6,
  More: More$6,
  Name: Name$6,
  Note: Note$6,
  Notes: Notes$6,
  Organization: Organization$6,
  Organizations: Organizations$6,
  Password: Password$6,
  Phone: Phone$6,
  Photo: Photo$6,
  Priorities: Priorities$6,
  Priority: Priority$6,
  Privacy: Privacy$6,
  Province: Province$6,
  Pusher: Pusher$6,
  Registration: Registration$6,
  Reset: Reset$6,
  Role: Role$6,
  Save: Save$6,
  Seconds: Seconds$6,
  Service: Service$6,
  Services: Services$6,
  Settings: Settings$6,
  Software: Software$6,
  State: State$6,
  Status: Status$6,
  Subject: Subject$6,
  Submit: Submit$6,
  Subscribe: Subscribe$6,
  Technical: Technical$6,
  Ticket: Ticket$6,
  Tickets: Tickets$6,
  Title: Title$6,
  Trashed: Trashed$6,
  Types: Types$6,
  Update: Update$6,
  Updated: Updated$6,
  Users: Users$6,
  default: lt
}, Symbol.toStringTag, { value: "Module" }));
const Dashboard$5 = "Dashboard";
const Logout$5 = "Uitloggen";
const Tickets$5 = "Tickets";
const Chat$5 = "Chat";
const FAQs$5 = "Veelgestelde vragen";
const Blog$5 = "Blog";
const More$5 = "Meer";
const Notes$5 = "Notities";
const Contacts$5 = "Contacten";
const Organizations$5 = "Organisaties";
const Users$5 = "Gebruikers";
const Customers$5 = "Klanten";
const Settings$5 = "Instellingen";
const Global$5 = "Globaal";
const Categories$5 = "Categorieën";
const Status$5 = "Status";
const Priorities$5 = "Prioriteiten";
const Departments$5 = "Afdelingen";
const Types$5 = "Typen";
const Pusher$5 = "Pusher";
const Contact$5 = "Contact";
const Services$5 = "Diensten";
const Filter$5 = "Filter";
const Trashed$5 = "Verwijderd";
const Reset$5 = "Resetten";
const Name$5 = "Naam";
const Email$5 = "E-mail";
const Phone$5 = "Telefoon";
const Country$5 = "Land";
const City$5 = "Stad";
const Address$5 = "Adres";
const Password$5 = "Wachtwoord";
const Role$5 = "Rol";
const Photo$5 = "Foto";
const Technical$5 = "Technisch";
const Hardware$5 = "Hardware";
const Development$5 = "Ontwikkeling";
const Management$5 = "Management";
const Admin$5 = "Beheerder";
const Software$5 = "Software";
const Service$5 = "Service";
const Event$5 = "Evenement";
const Average$5 = "Gemiddeld";
const Seconds$5 = "Seconden";
const Month$5 = "Maand";
const Months$5 = "Maanden";
const Day$5 = "Dag";
const Days$5 = "Dagen";
const Hours$5 = "Uren";
const Hour$5 = "Uur";
const Minutes$5 = "Minuten";
const Minute$5 = "Minuut";
const Key$5 = "Sleutel";
const Subject$5 = "Onderwerp";
const Priority$5 = "Prioriteit";
const Updated$5 = "Bijgewerkt";
const Customer$5 = "Klant";
const Department$5 = "Afdeling";
const Category$5 = "Categorie";
const Created$5 = "Aangemaakt";
const Save$5 = "Opslaan";
const Ticket$5 = "Ticket";
const FAQ$5 = "Veelgestelde vragen";
const Title$5 = "Titel";
const Details$5 = "Details";
const Note$5 = "Notitie";
const Submit$5 = "Verzenden";
const Cancel$5 = "Annuleren";
const Organization$5 = "Organisatie";
const Province$5 = "Provincie";
const State$5 = "Staat";
const Delete$5 = "Verwijderen";
const Update$5 = "Bijwerken";
const Create$5 = "Aanmaken";
const Location$5 = "Locatie";
const Privacy$5 = "Privacy";
const Company$5 = "Bedrijf";
const Subscribe$5 = "Abonneren";
const Login$5 = "Inloggen";
const Hello$5 = "Hallo";
const Registration$5 = "Registratie";
const nl = {
  "Edit Profile": "Profiel bewerken",
  Dashboard: Dashboard$5,
  Logout: Logout$5,
  Tickets: Tickets$5,
  Chat: Chat$5,
  FAQs: FAQs$5,
  Blog: Blog$5,
  "Knowledge Base": "Kennisbank",
  More: More$5,
  Notes: Notes$5,
  Contacts: Contacts$5,
  Organizations: Organizations$5,
  Users: Users$5,
  Customers: Customers$5,
  Settings: Settings$5,
  Global: Global$5,
  Categories: Categories$5,
  Status: Status$5,
  Priorities: Priorities$5,
  Departments: Departments$5,
  Types: Types$5,
  "Email Templates": "E-mailsjablonen",
  "SMTP Mail": "SMTP Mail",
  Pusher: Pusher$5,
  "Pusher Chat": "Pusher Chat",
  "Front Pages": "Voorpagina's",
  Contact: Contact$5,
  Services: Services$5,
  "Privacy Policy": "Privacybeleid",
  "Terms of Services": "Servicevoorwaarden",
  Filter: Filter$5,
  Trashed: Trashed$5,
  "Trashed With": "Verwijderd met",
  "Only Trashed": "Alleen verwijderd",
  "Search...": "Zoeken...",
  Reset: Reset$5,
  Name: Name$5,
  Email: Email$5,
  Phone: Phone$5,
  Country: Country$5,
  "Create User": "Gebruiker aanmaken",
  "First Name": "Voornaam",
  "First name": "Voornaam",
  "Last Name": "Achternaam",
  "Last name": "Achternaam",
  City: City$5,
  Address: Address$5,
  Password: Password$5,
  Role: Role$5,
  Photo: Photo$5,
  "New Tickets": "Nieuwe tickets",
  "Open Tickets": "Open tickets",
  "Closed Tickets": "Gesloten tickets",
  "Unassigned Tickets": "Niet-toegewezen tickets",
  "Ticket by department": "Ticket per afdeling",
  "Ticket by type": "Ticket per type",
  "Top ticket creator": "Beste ticketmaker",
  "Ticket history": "Tickethistorie",
  "First Response Time": "Eerste reactietijd",
  "Last Response Time": "Laatste reactietijd",
  Technical: Technical$5,
  Hardware: Hardware$5,
  Development: Development$5,
  Management: Management$5,
  Admin: Admin$5,
  Software: Software$5,
  Service: Service$5,
  Event: Event$5,
  Average: Average$5,
  Seconds: Seconds$5,
  "this month": "deze maand",
  "last month": "vorige maand",
  Month: Month$5,
  Months: Months$5,
  Day: Day$5,
  Days: Days$5,
  Hours: Hours$5,
  Hour: Hour$5,
  Minutes: Minutes$5,
  Minute: Minute$5,
  Key: Key$5,
  Subject: Subject$5,
  "Attach files": "Bestanden bijvoegen",
  Priority: Priority$5,
  "Date": "Datum",
  Updated: Updated$5,
  Customer: Customer$5,
  Department: Department$5,
  "Assigned to": "Toegewezen aan",
  "Ticket type": "Tickettype",
  Category: Category$5,
  Created: Created$5,
  "Request Details": "Verzoekdetails",
  "Attach File": "Bestand bijvoegen",
  "Delete Ticket": "Ticket verwijderen",
  Save: Save$5,
  "Ticket discussion": "Ticketdiscussie",
  Ticket: Ticket$5,
  FAQ: FAQ$5,
  "Create Ticket": "Ticket aanmaken",
  "New Ticket": "Nieuw ticket",
  "Create FAQ": "Veelgestelde vraag aanmaken",
  "Filter by priority": "Filter op prioriteit",
  "Filter by status": "Filter op status",
  "Delete FAQ": "Veelgestelde vraag verwijderen",
  Title: Title$5,
  Details: Details$5,
  Note: Note$5,
  Submit: Submit$5,
  Cancel: Cancel$5,
  "Delete note": "Notitie verwijderen",
  Organization: Organization$5,
  Province: Province$5,
  State: State$5,
  "Postal code": "Postcode",
  "Delete Organization": "Organisatie verwijderen",
  "Update Organization": "Organisatie bijwerken",
  Delete: Delete$5,
  Update: Update$5,
  Create: Create$5,
  "Create Customer": "Klant aanmaken",
  "Manage Users": "Gebruikers beheren",
  "Default Language": "Standaardtaal",
  "Email Notifications": "E-mailmeldingen",
  "Create ticket by new customer": "Ticket aanmaken door nieuwe klant",
  "Create ticket from dashboard": "Ticket aanmaken vanuit dashboard",
  "Status or priority changes": "Status- of prioriteitswijzigingen",
  "Create a new user": "Nieuwe gebruiker aanmaken",
  "Email Template": "E-mailsjabloon",
  "SMTP Host": "SMTP Host",
  "SMTP Port": "SMTP Poort",
  "SMTP Username": "SMTP Gebruikersnaam",
  "SMTP Password": "SMTP Wachtwoord",
  Location: Location$5,
  "Phone number": "Telefoonnummer",
  "Email address": "E-mailadres",
  "Add New": "Nieuw toevoegen",
  Privacy: Privacy$5,
  Company: Company$5,
  Subscribe: Subscribe$5,
  Login: Login$5,
  "Submit ticket": "Ticket indienen",
  "terms and conditions": "Algemene voorwaarden",
  "I agree with the": "Ik ga akkoord met de",
  "Don’t have account?": "Heb je geen account?",
  "Remember Me": "Onthoud mij",
  "Reset Password": "Wachtwoord opnieuw instellen",
  "Already have an account?": "Heb je al een account?",
  "Good Morning": "Goedemorgen",
  "Good Noon": "Goedemiddag",
  "Good Evening": "Goedenavond",
  "Good Afternoon": "Goedemiddag",
  Hello: Hello$5,
  "Forgot your password?": "Wachtwoord vergeten?",
  "Send Password Reset Link": "Wachtwoordherstellink verzenden",
  Registration: Registration$5
};
const __vite_glob_1_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Address: Address$5,
  Admin: Admin$5,
  Average: Average$5,
  Blog: Blog$5,
  Cancel: Cancel$5,
  Categories: Categories$5,
  Category: Category$5,
  Chat: Chat$5,
  City: City$5,
  Company: Company$5,
  Contact: Contact$5,
  Contacts: Contacts$5,
  Country: Country$5,
  Create: Create$5,
  Created: Created$5,
  Customer: Customer$5,
  Customers: Customers$5,
  Dashboard: Dashboard$5,
  Day: Day$5,
  Days: Days$5,
  Delete: Delete$5,
  Department: Department$5,
  Departments: Departments$5,
  Details: Details$5,
  Development: Development$5,
  Email: Email$5,
  Event: Event$5,
  FAQ: FAQ$5,
  FAQs: FAQs$5,
  Filter: Filter$5,
  Global: Global$5,
  Hardware: Hardware$5,
  Hello: Hello$5,
  Hour: Hour$5,
  Hours: Hours$5,
  Key: Key$5,
  Location: Location$5,
  Login: Login$5,
  Logout: Logout$5,
  Management: Management$5,
  Minute: Minute$5,
  Minutes: Minutes$5,
  Month: Month$5,
  Months: Months$5,
  More: More$5,
  Name: Name$5,
  Note: Note$5,
  Notes: Notes$5,
  Organization: Organization$5,
  Organizations: Organizations$5,
  Password: Password$5,
  Phone: Phone$5,
  Photo: Photo$5,
  Priorities: Priorities$5,
  Priority: Priority$5,
  Privacy: Privacy$5,
  Province: Province$5,
  Pusher: Pusher$5,
  Registration: Registration$5,
  Reset: Reset$5,
  Role: Role$5,
  Save: Save$5,
  Seconds: Seconds$5,
  Service: Service$5,
  Services: Services$5,
  Settings: Settings$5,
  Software: Software$5,
  State: State$5,
  Status: Status$5,
  Subject: Subject$5,
  Submit: Submit$5,
  Subscribe: Subscribe$5,
  Technical: Technical$5,
  Ticket: Ticket$5,
  Tickets: Tickets$5,
  Title: Title$5,
  Trashed: Trashed$5,
  Types: Types$5,
  Update: Update$5,
  Updated: Updated$5,
  Users: Users$5,
  default: nl
}, Symbol.toStringTag, { value: "Module" }));
const php_en = {
  "auth.failed": "These credentials do not match our records.",
  "auth.password": "The provided password is incorrect.",
  "auth.throttle": "Too many login attempts. Please try again in :seconds seconds.",
  "pagination.previous": "&laquo; Previous",
  "pagination.next": "Next &raquo;",
  "passwords.reset": "Your password has been reset.",
  "passwords.sent": "We have emailed your password reset link.",
  "passwords.throttled": "Please wait before retrying.",
  "passwords.token": "This password reset token is invalid.",
  "passwords.user": "We can't find a user with that email address.",
  "validation.accepted": "The :attribute field must be accepted.",
  "validation.accepted_if": "The :attribute field must be accepted when :other is :value.",
  "validation.active_url": "The :attribute field must be a valid URL.",
  "validation.after": "The :attribute field must be a date after :date.",
  "validation.after_or_equal": "The :attribute field must be a date after or equal to :date.",
  "validation.alpha": "The :attribute field must only contain letters.",
  "validation.alpha_dash": "The :attribute field must only contain letters, numbers, dashes, and underscores.",
  "validation.alpha_num": "The :attribute field must only contain letters and numbers.",
  "validation.array": "The :attribute field must be an array.",
  "validation.ascii": "The :attribute field must only contain single-byte alphanumeric characters and symbols.",
  "validation.before": "The :attribute field must be a date before :date.",
  "validation.before_or_equal": "The :attribute field must be a date before or equal to :date.",
  "validation.between.array": "The :attribute field must have between :min and :max items.",
  "validation.between.file": "The :attribute field must be between :min and :max kilobytes.",
  "validation.between.numeric": "The :attribute field must be between :min and :max.",
  "validation.between.string": "The :attribute field must be between :min and :max characters.",
  "validation.boolean": "The :attribute field must be true or false.",
  "validation.can": "The :attribute field contains an unauthorized value.",
  "validation.confirmed": "The :attribute field confirmation does not match.",
  "validation.current_password": "The password is incorrect.",
  "validation.date": "The :attribute field must be a valid date.",
  "validation.date_equals": "The :attribute field must be a date equal to :date.",
  "validation.date_format": "The :attribute field must match the format :format.",
  "validation.decimal": "The :attribute field must have :decimal decimal places.",
  "validation.declined": "The :attribute field must be declined.",
  "validation.declined_if": "The :attribute field must be declined when :other is :value.",
  "validation.different": "The :attribute field and :other must be different.",
  "validation.digits": "The :attribute field must be :digits digits.",
  "validation.digits_between": "The :attribute field must be between :min and :max digits.",
  "validation.dimensions": "The :attribute field has invalid image dimensions.",
  "validation.distinct": "The :attribute field has a duplicate value.",
  "validation.doesnt_end_with": "The :attribute field must not end with one of the following: :values.",
  "validation.doesnt_start_with": "The :attribute field must not start with one of the following: :values.",
  "validation.email": "The :attribute field must be a valid email address.",
  "validation.ends_with": "The :attribute field must end with one of the following: :values.",
  "validation.enum": "The selected :attribute is invalid.",
  "validation.exists": "The selected :attribute is invalid.",
  "validation.extensions": "The :attribute field must have one of the following extensions: :values.",
  "validation.file": "The :attribute field must be a file.",
  "validation.filled": "The :attribute field must have a value.",
  "validation.gt.array": "The :attribute field must have more than :value items.",
  "validation.gt.file": "The :attribute field must be greater than :value kilobytes.",
  "validation.gt.numeric": "The :attribute field must be greater than :value.",
  "validation.gt.string": "The :attribute field must be greater than :value characters.",
  "validation.gte.array": "The :attribute field must have :value items or more.",
  "validation.gte.file": "The :attribute field must be greater than or equal to :value kilobytes.",
  "validation.gte.numeric": "The :attribute field must be greater than or equal to :value.",
  "validation.gte.string": "The :attribute field must be greater than or equal to :value characters.",
  "validation.hex_color": "The :attribute field must be a valid hexadecimal color.",
  "validation.image": "The :attribute field must be an image.",
  "validation.in": "The selected :attribute is invalid.",
  "validation.in_array": "The :attribute field must exist in :other.",
  "validation.integer": "The :attribute field must be an integer.",
  "validation.ip": "The :attribute field must be a valid IP address.",
  "validation.ipv4": "The :attribute field must be a valid IPv4 address.",
  "validation.ipv6": "The :attribute field must be a valid IPv6 address.",
  "validation.json": "The :attribute field must be a valid JSON string.",
  "validation.lowercase": "The :attribute field must be lowercase.",
  "validation.lt.array": "The :attribute field must have less than :value items.",
  "validation.lt.file": "The :attribute field must be less than :value kilobytes.",
  "validation.lt.numeric": "The :attribute field must be less than :value.",
  "validation.lt.string": "The :attribute field must be less than :value characters.",
  "validation.lte.array": "The :attribute field must not have more than :value items.",
  "validation.lte.file": "The :attribute field must be less than or equal to :value kilobytes.",
  "validation.lte.numeric": "The :attribute field must be less than or equal to :value.",
  "validation.lte.string": "The :attribute field must be less than or equal to :value characters.",
  "validation.mac_address": "The :attribute field must be a valid MAC address.",
  "validation.max.array": "The :attribute field must not have more than :max items.",
  "validation.max.file": "The :attribute field must not be greater than :max kilobytes.",
  "validation.max.numeric": "The :attribute field must not be greater than :max.",
  "validation.max.string": "The :attribute field must not be greater than :max characters.",
  "validation.max_digits": "The :attribute field must not have more than :max digits.",
  "validation.mimes": "The :attribute field must be a file of type: :values.",
  "validation.mimetypes": "The :attribute field must be a file of type: :values.",
  "validation.min.array": "The :attribute field must have at least :min items.",
  "validation.min.file": "The :attribute field must be at least :min kilobytes.",
  "validation.min.numeric": "The :attribute field must be at least :min.",
  "validation.min.string": "The :attribute field must be at least :min characters.",
  "validation.min_digits": "The :attribute field must have at least :min digits.",
  "validation.missing": "The :attribute field must be missing.",
  "validation.missing_if": "The :attribute field must be missing when :other is :value.",
  "validation.missing_unless": "The :attribute field must be missing unless :other is :value.",
  "validation.missing_with": "The :attribute field must be missing when :values is present.",
  "validation.missing_with_all": "The :attribute field must be missing when :values are present.",
  "validation.multiple_of": "The :attribute field must be a multiple of :value.",
  "validation.not_in": "The selected :attribute is invalid.",
  "validation.not_regex": "The :attribute field format is invalid.",
  "validation.numeric": "The :attribute field must be a number.",
  "validation.password.letters": "The :attribute field must contain at least one letter.",
  "validation.password.mixed": "The :attribute field must contain at least one uppercase and one lowercase letter.",
  "validation.password.numbers": "The :attribute field must contain at least one number.",
  "validation.password.symbols": "The :attribute field must contain at least one symbol.",
  "validation.password.uncompromised": "The given :attribute has appeared in a data leak. Please choose a different :attribute.",
  "validation.present": "The :attribute field must be present.",
  "validation.present_if": "The :attribute field must be present when :other is :value.",
  "validation.present_unless": "The :attribute field must be present unless :other is :value.",
  "validation.present_with": "The :attribute field must be present when :values is present.",
  "validation.present_with_all": "The :attribute field must be present when :values are present.",
  "validation.prohibited": "The :attribute field is prohibited.",
  "validation.prohibited_if": "The :attribute field is prohibited when :other is :value.",
  "validation.prohibited_unless": "The :attribute field is prohibited unless :other is in :values.",
  "validation.prohibits": "The :attribute field prohibits :other from being present.",
  "validation.regex": "The :attribute field format is invalid.",
  "validation.required": "The :attribute field is required.",
  "validation.required_array_keys": "The :attribute field must contain entries for: :values.",
  "validation.required_if": "The :attribute field is required when :other is :value.",
  "validation.required_if_accepted": "The :attribute field is required when :other is accepted.",
  "validation.required_unless": "The :attribute field is required unless :other is in :values.",
  "validation.required_with": "The :attribute field is required when :values is present.",
  "validation.required_with_all": "The :attribute field is required when :values are present.",
  "validation.required_without": "The :attribute field is required when :values is not present.",
  "validation.required_without_all": "The :attribute field is required when none of :values are present.",
  "validation.same": "The :attribute field must match :other.",
  "validation.size.array": "The :attribute field must contain :size items.",
  "validation.size.file": "The :attribute field must be :size kilobytes.",
  "validation.size.numeric": "The :attribute field must be :size.",
  "validation.size.string": "The :attribute field must be :size characters.",
  "validation.starts_with": "The :attribute field must start with one of the following: :values.",
  "validation.string": "The :attribute field must be a string.",
  "validation.timezone": "The :attribute field must be a valid timezone.",
  "validation.unique": "The :attribute has already been taken.",
  "validation.uploaded": "The :attribute failed to upload.",
  "validation.uppercase": "The :attribute field must be uppercase.",
  "validation.url": "The :attribute field must be a valid URL.",
  "validation.ulid": "The :attribute field must be a valid ULID.",
  "validation.uuid": "The :attribute field must be a valid UUID.",
  "validation.custom.attribute-name.rule-name": "custom-message"
};
const __vite_glob_1_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: php_en
}, Symbol.toStringTag, { value: "Module" }));
const Dashboard$4 = "Pulpit";
const Logout$4 = "Wyloguj się";
const Tickets$4 = "Zgłoszenia";
const Chat$4 = "Czat";
const FAQs$4 = "FAQ";
const Blog$4 = "Blog";
const More$4 = "Więcej";
const Notes$4 = "Notatki";
const Contacts$4 = "Kontakty";
const Organizations$4 = "Organizacje";
const Users$4 = "Użytkownicy";
const Customers$4 = "Klienci";
const Settings$4 = "Ustawienia";
const Global$4 = "Globalne";
const Categories$4 = "Kategorie";
const Status$4 = "Status";
const Priorities$4 = "Priorytety";
const Departments$4 = "Działy";
const Types$4 = "Typy";
const Pusher$4 = "Pusher";
const Contact$4 = "Kontakt";
const Services$4 = "Usługi";
const Filter$4 = "Filtr";
const Trashed$4 = "Usunięte";
const Reset$4 = "Resetuj";
const Name$4 = "Nazwa";
const Email$4 = "E-mail";
const Phone$4 = "Telefon";
const Country$4 = "Kraj";
const City$4 = "Miasto";
const Address$4 = "Adres";
const Password$4 = "Hasło";
const Role$4 = "Rola";
const Photo$4 = "Zdjęcie";
const Technical$4 = "Techniczne";
const Hardware$4 = "Sprzęt";
const Development$4 = "Rozwój";
const Management$4 = "Zarządzanie";
const Admin$4 = "Administrator";
const Software$4 = "Oprogramowanie";
const Service$4 = "Usługa";
const Event$4 = "Wydarzenie";
const Average$4 = "Średnia";
const Seconds$4 = "Sekundy";
const Month$4 = "Miesiąc";
const Months$4 = "Miesiące";
const Day$4 = "Dzień";
const Days$4 = "Dni";
const Hours$4 = "Godziny";
const Hour$4 = "Godzina";
const Minutes$4 = "Minuty";
const Minute$4 = "Minuta";
const Key$4 = "Klucz";
const Subject$4 = "Temat";
const Priority$4 = "Priorytet";
const Updated$4 = "Zaktualizowano";
const Customer$4 = "Klient";
const Department$4 = "Dział";
const Category$4 = "Kategoria";
const Created$4 = "Utworzono";
const Save$4 = "Zapisz";
const Ticket$4 = "Zgłoszenie";
const FAQ$4 = "FAQ";
const Title$4 = "Tytuł";
const Details$4 = "Szczegóły";
const Note$4 = "Notatka";
const Submit$4 = "Prześlij";
const Cancel$4 = "Anuluj";
const Organization$4 = "Organizacja";
const Province$4 = "Prowincja";
const State$4 = "Stan";
const Delete$4 = "Usuń";
const Update$4 = "Aktualizuj";
const Create$4 = "Utwórz";
const Location$4 = "Lokalizacja";
const Privacy$4 = "Prywatność";
const Company$4 = "Firma";
const Subscribe$4 = "Subskrybuj";
const Login$4 = "Zaloguj się";
const Hello$4 = "Cześć";
const Registration$4 = "Rejestracja";
const pl = {
  "Edit Profile": "Edytuj profil",
  Dashboard: Dashboard$4,
  Logout: Logout$4,
  Tickets: Tickets$4,
  Chat: Chat$4,
  FAQs: FAQs$4,
  Blog: Blog$4,
  "Knowledge Base": "Baza wiedzy",
  More: More$4,
  Notes: Notes$4,
  Contacts: Contacts$4,
  Organizations: Organizations$4,
  Users: Users$4,
  Customers: Customers$4,
  Settings: Settings$4,
  Global: Global$4,
  Categories: Categories$4,
  Status: Status$4,
  Priorities: Priorities$4,
  Departments: Departments$4,
  Types: Types$4,
  "Email Templates": "Szablony e-mail",
  "SMTP Mail": "Poczta SMTP",
  Pusher: Pusher$4,
  "Pusher Chat": "Pusher czat",
  "Front Pages": "Strony główne",
  Contact: Contact$4,
  Services: Services$4,
  "Privacy Policy": "Polityka prywatności",
  "Terms of Services": "Warunki korzystania",
  Filter: Filter$4,
  Trashed: Trashed$4,
  "Trashed With": "Usunięte z",
  "Only Trashed": "Tylko usunięte",
  "Search...": "Szukaj...",
  Reset: Reset$4,
  Name: Name$4,
  Email: Email$4,
  Phone: Phone$4,
  Country: Country$4,
  "Create User": "Utwórz użytkownika",
  "First Name": "Imię",
  "First name": "Imię",
  "Last Name": "Nazwisko",
  "Last name": "Nazwisko",
  City: City$4,
  Address: Address$4,
  Password: Password$4,
  Role: Role$4,
  Photo: Photo$4,
  "New Tickets": "Nowe zgłoszenia",
  "Open Tickets": "Otwarte zgłoszenia",
  "Closed Tickets": "Zamknięte zgłoszenia",
  "Unassigned Tickets": "Nieprzypisane zgłoszenia",
  "Ticket by department": "Zgłoszenia według działu",
  "Ticket by type": "Zgłoszenia według typu",
  "Top ticket creator": "Najczęściej tworzący zgłoszenia",
  "Ticket history": "Historia zgłoszeń",
  "First Response Time": "Czas pierwszej odpowiedzi",
  "Last Response Time": "Czas ostatniej odpowiedzi",
  Technical: Technical$4,
  Hardware: Hardware$4,
  Development: Development$4,
  Management: Management$4,
  Admin: Admin$4,
  Software: Software$4,
  Service: Service$4,
  Event: Event$4,
  Average: Average$4,
  Seconds: Seconds$4,
  "this month": "ten miesiąc",
  "last month": "zeszły miesiąc",
  Month: Month$4,
  Months: Months$4,
  Day: Day$4,
  Days: Days$4,
  Hours: Hours$4,
  Hour: Hour$4,
  Minutes: Minutes$4,
  Minute: Minute$4,
  Key: Key$4,
  Subject: Subject$4,
  "Attach files": "Załącz pliki",
  Priority: Priority$4,
  "Date": "Data",
  Updated: Updated$4,
  Customer: Customer$4,
  Department: Department$4,
  "Assigned to": "Przypisane do",
  "Ticket type": "Typ zgłoszenia",
  Category: Category$4,
  Created: Created$4,
  "Request Details": "Szczegóły żądania",
  "Attach File": "Załącz plik",
  "Delete Ticket": "Usuń zgłoszenie",
  Save: Save$4,
  "Ticket discussion": "Dyskusja o zgłoszeniu",
  Ticket: Ticket$4,
  FAQ: FAQ$4,
  "Create Ticket": "Utwórz zgłoszenie",
  "New Ticket": "Nowe zgłoszenie",
  "Create FAQ": "Utwórz FAQ",
  "Filter by priority": "Filtruj według priorytetu",
  "Filter by status": "Filtruj według statusu",
  "Delete FAQ": "Usuń FAQ",
  Title: Title$4,
  Details: Details$4,
  Note: Note$4,
  Submit: Submit$4,
  Cancel: Cancel$4,
  "Delete note": "Usuń notatkę",
  Organization: Organization$4,
  Province: Province$4,
  State: State$4,
  "Postal code": "Kod pocztowy",
  "Delete Organization": "Usuń organizację",
  "Update Organization": "Aktualizuj organizację",
  Delete: Delete$4,
  Update: Update$4,
  Create: Create$4,
  "Create Customer": "Utwórz klienta",
  "Manage Users": "Zarządzaj użytkownikami",
  "Default Language": "Domyślny język",
  "Email Notifications": "Powiadomienia e-mail",
  "Create ticket by new customer": "Utwórz zgłoszenie przez nowego klienta",
  "Create ticket from dashboard": "Utwórz zgłoszenie z pulpitu",
  "Status or priority changes": "Zmiany statusu lub priorytetu",
  "Create a new user": "Utwórz nowego użytkownika",
  "Email Template": "Szablon e-mail",
  "SMTP Host": "Host SMTP",
  "SMTP Port": "Port SMTP",
  "SMTP Username": "Nazwa użytkownika SMTP",
  "SMTP Password": "Hasło SMTP",
  Location: Location$4,
  "Phone number": "Numer telefonu",
  "Email address": "Adres e-mail",
  "Add New": "Dodaj nowy",
  Privacy: Privacy$4,
  Company: Company$4,
  Subscribe: Subscribe$4,
  Login: Login$4,
  "Submit ticket": "Prześlij zgłoszenie",
  "terms and conditions": "warunki i zasady",
  "I agree with the": "Zgadzam się z",
  "Don’t have account?": "Nie masz konta?",
  "Remember Me": "Zapamiętaj mnie",
  "Reset Password": "Zresetuj hasło",
  "Already have an account?": "Masz już konto?",
  "Good Morning": "Dzień dobry",
  "Good Noon": "Dzień dobry",
  "Good Evening": "Dobry wieczór",
  "Good Afternoon": "Dobry popołudnie",
  Hello: Hello$4,
  "Forgot your password?": "Zapomniałeś hasła?",
  "Send Password Reset Link": "Wyślij link do resetowania hasła",
  Registration: Registration$4
};
const __vite_glob_1_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Address: Address$4,
  Admin: Admin$4,
  Average: Average$4,
  Blog: Blog$4,
  Cancel: Cancel$4,
  Categories: Categories$4,
  Category: Category$4,
  Chat: Chat$4,
  City: City$4,
  Company: Company$4,
  Contact: Contact$4,
  Contacts: Contacts$4,
  Country: Country$4,
  Create: Create$4,
  Created: Created$4,
  Customer: Customer$4,
  Customers: Customers$4,
  Dashboard: Dashboard$4,
  Day: Day$4,
  Days: Days$4,
  Delete: Delete$4,
  Department: Department$4,
  Departments: Departments$4,
  Details: Details$4,
  Development: Development$4,
  Email: Email$4,
  Event: Event$4,
  FAQ: FAQ$4,
  FAQs: FAQs$4,
  Filter: Filter$4,
  Global: Global$4,
  Hardware: Hardware$4,
  Hello: Hello$4,
  Hour: Hour$4,
  Hours: Hours$4,
  Key: Key$4,
  Location: Location$4,
  Login: Login$4,
  Logout: Logout$4,
  Management: Management$4,
  Minute: Minute$4,
  Minutes: Minutes$4,
  Month: Month$4,
  Months: Months$4,
  More: More$4,
  Name: Name$4,
  Note: Note$4,
  Notes: Notes$4,
  Organization: Organization$4,
  Organizations: Organizations$4,
  Password: Password$4,
  Phone: Phone$4,
  Photo: Photo$4,
  Priorities: Priorities$4,
  Priority: Priority$4,
  Privacy: Privacy$4,
  Province: Province$4,
  Pusher: Pusher$4,
  Registration: Registration$4,
  Reset: Reset$4,
  Role: Role$4,
  Save: Save$4,
  Seconds: Seconds$4,
  Service: Service$4,
  Services: Services$4,
  Settings: Settings$4,
  Software: Software$4,
  State: State$4,
  Status: Status$4,
  Subject: Subject$4,
  Submit: Submit$4,
  Subscribe: Subscribe$4,
  Technical: Technical$4,
  Ticket: Ticket$4,
  Tickets: Tickets$4,
  Title: Title$4,
  Trashed: Trashed$4,
  Types: Types$4,
  Update: Update$4,
  Updated: Updated$4,
  Users: Users$4,
  default: pl
}, Symbol.toStringTag, { value: "Module" }));
const Dashboard$3 = "Painel de Controle";
const Logout$3 = "Sair";
const Tickets$3 = "Tickets";
const Chat$3 = "Chat";
const FAQs$3 = "Perguntas Frequentes";
const Blog$3 = "Blog";
const More$3 = "Mais";
const Notes$3 = "Notas";
const Contacts$3 = "Contatos";
const Organizations$3 = "Organizações";
const Users$3 = "Usuários";
const Customers$3 = "Clientes";
const Settings$3 = "Configurações";
const Global$3 = "Global";
const Categories$3 = "Categorias";
const Status$3 = "Status";
const Priorities$3 = "Prioridades";
const Departments$3 = "Departamentos";
const Types$3 = "Tipos";
const Pusher$3 = "Pusher";
const Contact$3 = "Contato";
const Services$3 = "Serviços";
const Filter$3 = "Filtrar";
const Trashed$3 = "Lixeira";
const Reset$3 = "Redefinir";
const Name$3 = "Nome";
const Email$3 = "Email";
const Phone$3 = "Telefone";
const Country$3 = "País";
const City$3 = "Cidade";
const Address$3 = "Endereço";
const Password$3 = "Senha";
const Role$3 = "Função";
const Photo$3 = "Foto";
const Technical$3 = "Técnico";
const Hardware$3 = "Hardware";
const Development$3 = "Desenvolvimento";
const Management$3 = "Gestão";
const Admin$3 = "Administrador";
const Software$3 = "Software";
const Service$3 = "Serviço";
const Event$3 = "Evento";
const Average$3 = "Média";
const Seconds$3 = "Segundos";
const Month$3 = "Mês";
const Months$3 = "Meses";
const Day$3 = "Dia";
const Days$3 = "Dias";
const Hours$3 = "Horas";
const Hour$3 = "Hora";
const Minutes$3 = "Minutos";
const Minute$3 = "Minuto";
const Key$3 = "Chave";
const Subject$3 = "Assunto";
const Priority$3 = "Prioridade";
const Updated$3 = "Atualizado";
const Customer$3 = "Cliente";
const Department$3 = "Departamento";
const Category$3 = "Categoria";
const Created$3 = "Criado";
const Save$3 = "Salvar";
const Ticket$3 = "Ticket";
const FAQ$3 = "Perguntas Frequentes";
const Title$3 = "Título";
const Details$3 = "Detalhes";
const Note$3 = "Nota";
const Submit$3 = "Enviar";
const Cancel$3 = "Cancelar";
const Organization$3 = "Organização";
const Province$3 = "Província";
const State$3 = "Estado";
const Delete$3 = "Excluir";
const Update$3 = "Atualizar";
const Create$3 = "Criar";
const Location$3 = "Localização";
const Privacy$3 = "Privacidade";
const Company$3 = "Empresa";
const Subscribe$3 = "Inscrever-se";
const Login$3 = "Entrar";
const Hello$3 = "Olá";
const Registration$3 = "Cadastro";
const pt = {
  "Edit Profile": "Editar Perfil",
  Dashboard: Dashboard$3,
  Logout: Logout$3,
  Tickets: Tickets$3,
  Chat: Chat$3,
  FAQs: FAQs$3,
  Blog: Blog$3,
  "Knowledge Base": "Base de Conhecimento",
  More: More$3,
  Notes: Notes$3,
  Contacts: Contacts$3,
  Organizations: Organizations$3,
  Users: Users$3,
  Customers: Customers$3,
  Settings: Settings$3,
  Global: Global$3,
  Categories: Categories$3,
  Status: Status$3,
  Priorities: Priorities$3,
  Departments: Departments$3,
  Types: Types$3,
  "Email Templates": "Modelos de Email",
  "SMTP Mail": "Email SMTP",
  Pusher: Pusher$3,
  "Pusher Chat": "Chat Pusher",
  "Front Pages": "Páginas Iniciais",
  Contact: Contact$3,
  Services: Services$3,
  "Privacy Policy": "Política de Privacidade",
  "Terms of Services": "Termos de Serviço",
  Filter: Filter$3,
  Trashed: Trashed$3,
  "Trashed With": "Excluído Com",
  "Only Trashed": "Somente Excluídos",
  "Search...": "Pesquisar...",
  Reset: Reset$3,
  Name: Name$3,
  Email: Email$3,
  Phone: Phone$3,
  Country: Country$3,
  "Create User": "Criar Usuário",
  "First Name": "Primeiro Nome",
  "First name": "Primeiro nome",
  "Last Name": "Sobrenome",
  "Last name": "Sobrenome",
  City: City$3,
  Address: Address$3,
  Password: Password$3,
  Role: Role$3,
  Photo: Photo$3,
  "New Tickets": "Novos Tickets",
  "Open Tickets": "Tickets Abertos",
  "Closed Tickets": "Tickets Fechados",
  "Unassigned Tickets": "Tickets Não Atribuídos",
  "Ticket by department": "Tickets por departamento",
  "Ticket by type": "Tickets por tipo",
  "Top ticket creator": "Maior criador de tickets",
  "Ticket history": "Histórico de tickets",
  "First Response Time": "Tempo de Primeira Resposta",
  "Last Response Time": "Tempo da Última Resposta",
  Technical: Technical$3,
  Hardware: Hardware$3,
  Development: Development$3,
  Management: Management$3,
  Admin: Admin$3,
  Software: Software$3,
  Service: Service$3,
  Event: Event$3,
  Average: Average$3,
  Seconds: Seconds$3,
  "this month": "este mês",
  "last month": "mês passado",
  Month: Month$3,
  Months: Months$3,
  Day: Day$3,
  Days: Days$3,
  Hours: Hours$3,
  Hour: Hour$3,
  Minutes: Minutes$3,
  Minute: Minute$3,
  Key: Key$3,
  Subject: Subject$3,
  "Attach files": "Anexar arquivos",
  Priority: Priority$3,
  "Date": "Data",
  Updated: Updated$3,
  Customer: Customer$3,
  Department: Department$3,
  "Assigned to": "Atribuído a",
  "Ticket type": "Tipo de Ticket",
  Category: Category$3,
  Created: Created$3,
  "Request Details": "Detalhes da Solicitação",
  "Attach File": "Anexar Arquivo",
  "Delete Ticket": "Excluir Ticket",
  Save: Save$3,
  "Ticket discussion": "Discussão do Ticket",
  Ticket: Ticket$3,
  FAQ: FAQ$3,
  "Create Ticket": "Criar Ticket",
  "New Ticket": "Novo Ticket",
  "Create FAQ": "Criar Pergunta Frequente",
  "Filter by priority": "Filtrar por prioridade",
  "Filter by status": "Filtrar por status",
  "Delete FAQ": "Excluir Pergunta Frequente",
  Title: Title$3,
  Details: Details$3,
  Note: Note$3,
  Submit: Submit$3,
  Cancel: Cancel$3,
  "Delete note": "Excluir nota",
  Organization: Organization$3,
  Province: Province$3,
  State: State$3,
  "Postal code": "Código Postal",
  "Delete Organization": "Excluir Organização",
  "Update Organization": "Atualizar Organização",
  Delete: Delete$3,
  Update: Update$3,
  Create: Create$3,
  "Create Customer": "Criar Cliente",
  "Manage Users": "Gerenciar Usuários",
  "Default Language": "Idioma Padrão",
  "Email Notifications": "Notificações por Email",
  "Create ticket by new customer": "Criar ticket por novo cliente",
  "Create ticket from dashboard": "Criar ticket do painel",
  "Status or priority changes": "Mudanças de status ou prioridade",
  "Create a new user": "Criar um novo usuário",
  "Email Template": "Modelo de Email",
  "SMTP Host": "Host SMTP",
  "SMTP Port": "Porta SMTP",
  "SMTP Username": "Usuário SMTP",
  "SMTP Password": "Senha SMTP",
  Location: Location$3,
  "Phone number": "Número de telefone",
  "Email address": "Endereço de email",
  "Add New": "Adicionar Novo",
  Privacy: Privacy$3,
  Company: Company$3,
  Subscribe: Subscribe$3,
  Login: Login$3,
  "Submit ticket": "Enviar Ticket",
  "terms and conditions": "termos e condições",
  "I agree with the": "Eu concordo com",
  "Don’t have account?": "Não tem uma conta?",
  "Remember Me": "Lembrar-me",
  "Reset Password": "Redefinir Senha",
  "Already have an account?": "Já tem uma conta?",
  "Good Morning": "Bom dia",
  "Good Noon": "Boa tarde",
  "Good Evening": "Boa noite",
  "Good Afternoon": "Boa tarde",
  Hello: Hello$3,
  "Forgot your password?": "Esqueceu sua senha?",
  "Send Password Reset Link": "Enviar link de redefinição de senha",
  Registration: Registration$3
};
const __vite_glob_1_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Address: Address$3,
  Admin: Admin$3,
  Average: Average$3,
  Blog: Blog$3,
  Cancel: Cancel$3,
  Categories: Categories$3,
  Category: Category$3,
  Chat: Chat$3,
  City: City$3,
  Company: Company$3,
  Contact: Contact$3,
  Contacts: Contacts$3,
  Country: Country$3,
  Create: Create$3,
  Created: Created$3,
  Customer: Customer$3,
  Customers: Customers$3,
  Dashboard: Dashboard$3,
  Day: Day$3,
  Days: Days$3,
  Delete: Delete$3,
  Department: Department$3,
  Departments: Departments$3,
  Details: Details$3,
  Development: Development$3,
  Email: Email$3,
  Event: Event$3,
  FAQ: FAQ$3,
  FAQs: FAQs$3,
  Filter: Filter$3,
  Global: Global$3,
  Hardware: Hardware$3,
  Hello: Hello$3,
  Hour: Hour$3,
  Hours: Hours$3,
  Key: Key$3,
  Location: Location$3,
  Login: Login$3,
  Logout: Logout$3,
  Management: Management$3,
  Minute: Minute$3,
  Minutes: Minutes$3,
  Month: Month$3,
  Months: Months$3,
  More: More$3,
  Name: Name$3,
  Note: Note$3,
  Notes: Notes$3,
  Organization: Organization$3,
  Organizations: Organizations$3,
  Password: Password$3,
  Phone: Phone$3,
  Photo: Photo$3,
  Priorities: Priorities$3,
  Priority: Priority$3,
  Privacy: Privacy$3,
  Province: Province$3,
  Pusher: Pusher$3,
  Registration: Registration$3,
  Reset: Reset$3,
  Role: Role$3,
  Save: Save$3,
  Seconds: Seconds$3,
  Service: Service$3,
  Services: Services$3,
  Settings: Settings$3,
  Software: Software$3,
  State: State$3,
  Status: Status$3,
  Subject: Subject$3,
  Submit: Submit$3,
  Subscribe: Subscribe$3,
  Technical: Technical$3,
  Ticket: Ticket$3,
  Tickets: Tickets$3,
  Title: Title$3,
  Trashed: Trashed$3,
  Types: Types$3,
  Update: Update$3,
  Updated: Updated$3,
  Users: Users$3,
  default: pt
}, Symbol.toStringTag, { value: "Module" }));
const Dashboard$2 = "لوحة التحكم";
const Logout$2 = "تسجيل الخروج";
const Tickets$2 = "التذاكر";
const Chat$2 = "الدردشة";
const FAQs$2 = "الأسئلة الشائعة";
const Blog$2 = "المدونة";
const More$2 = "المزيد";
const Notes$2 = "الملاحظات";
const Contacts$2 = "جهات الاتصال";
const Organizations$2 = "المنظمات";
const Users$2 = "المستخدمون";
const Customers$2 = "العملاء";
const Settings$2 = "الإعدادات";
const Global$2 = "عام";
const Categories$2 = "الفئات";
const Status$2 = "الحالة";
const Priorities$2 = "الأولويات";
const Departments$2 = "الأقسام";
const Types$2 = "الأنواع";
const Pusher$2 = "الدافع";
const Contact$2 = "اتصل";
const Services$2 = "الخدمات";
const Filter$2 = "تصفية";
const Trashed$2 = "المحذوفات";
const Reset$2 = "إعادة ضبط";
const Name$2 = "الاسم";
const Email$2 = "البريد الإلكتروني";
const Phone$2 = "الهاتف";
const Country$2 = "الدولة";
const City$2 = "المدينة";
const Address$2 = "العنوان";
const Password$2 = "كلمة المرور";
const Role$2 = "الدور";
const Photo$2 = "الصورة";
const Technical$2 = "تقني";
const Hardware$2 = "الأجهزة";
const Development$2 = "التطوير";
const Management$2 = "الإدارة";
const Admin$2 = "المسؤول";
const Software$2 = "البرمجيات";
const Service$2 = "الخدمة";
const Event$2 = "الحدث";
const Average$2 = "المتوسط";
const Seconds$2 = "ثواني";
const Month$2 = "شهر";
const Months$2 = "أشهر";
const Day$2 = "يوم";
const Days$2 = "أيام";
const Hours$2 = "ساعات";
const Hour$2 = "ساعة";
const Minutes$2 = "دقائق";
const Minute$2 = "دقيقة";
const Key$2 = "المفتاح";
const Subject$2 = "الموضوع";
const Priority$2 = "الأولوية";
const Updated$2 = "محدث";
const Customer$2 = "العميل";
const Department$2 = "القسم";
const Category$2 = "الفئة";
const Created$2 = "تم الإنشاء";
const Save$2 = "حفظ";
const Ticket$2 = "التذكرة";
const FAQ$2 = "الأسئلة الشائعة";
const Title$2 = "العنوان";
const Details$2 = "التفاصيل";
const Note$2 = "ملاحظة";
const Submit$2 = "إرسال";
const Cancel$2 = "إلغاء";
const Organization$2 = "المنظمة";
const Province$2 = "المقاطعة";
const State$2 = "الولاية";
const Delete$2 = "حذف";
const Update$2 = "تحديث";
const Create$2 = "إنشاء";
const Location$2 = "الموقع";
const Privacy$2 = "الخصوصية";
const Company$2 = "الشركة";
const Subscribe$2 = "اشترك";
const Login$2 = "تسجيل الدخول";
const Hello$2 = "مرحبا";
const Registration$2 = "التسجيل";
const sa = {
  "Edit Profile": "تعديل الملف الشخصي",
  Dashboard: Dashboard$2,
  Logout: Logout$2,
  Tickets: Tickets$2,
  Chat: Chat$2,
  FAQs: FAQs$2,
  Blog: Blog$2,
  "Knowledge Base": "قاعدة المعرفة",
  More: More$2,
  Notes: Notes$2,
  Contacts: Contacts$2,
  Organizations: Organizations$2,
  Users: Users$2,
  Customers: Customers$2,
  Settings: Settings$2,
  Global: Global$2,
  Categories: Categories$2,
  Status: Status$2,
  Priorities: Priorities$2,
  Departments: Departments$2,
  Types: Types$2,
  "Email Templates": "قوالب البريد الإلكتروني",
  "SMTP Mail": "بريد SMTP",
  Pusher: Pusher$2,
  "Pusher Chat": "دردشة الدفع",
  "Front Pages": "الصفحات الأمامية",
  Contact: Contact$2,
  Services: Services$2,
  "Privacy Policy": "سياسة الخصوصية",
  "Terms of Services": "شروط الخدمة",
  Filter: Filter$2,
  Trashed: Trashed$2,
  "Trashed With": "المحذوف مع",
  "Only Trashed": "المحذوف فقط",
  "Search...": "بحث...",
  Reset: Reset$2,
  Name: Name$2,
  Email: Email$2,
  Phone: Phone$2,
  Country: Country$2,
  "Create User": "إنشاء مستخدم",
  "First Name": "الاسم الأول",
  "First name": "الاسم الأول",
  "Last Name": "الاسم الأخير",
  "Last name": "الاسم الأخير",
  City: City$2,
  Address: Address$2,
  Password: Password$2,
  Role: Role$2,
  Photo: Photo$2,
  "New Tickets": "التذاكر الجديدة",
  "Open Tickets": "التذاكر المفتوحة",
  "Closed Tickets": "التذاكر المغلقة",
  "Unassigned Tickets": "التذاكر غير المعينة",
  "Ticket by department": "التذاكر حسب القسم",
  "Ticket by type": "التذاكر حسب النوع",
  "Top ticket creator": "أكثر منشئ التذاكر",
  "Ticket history": "سجل التذاكر",
  "First Response Time": "وقت الاستجابة الأول",
  "Last Response Time": "آخر وقت استجابة",
  Technical: Technical$2,
  Hardware: Hardware$2,
  Development: Development$2,
  Management: Management$2,
  Admin: Admin$2,
  Software: Software$2,
  Service: Service$2,
  Event: Event$2,
  Average: Average$2,
  Seconds: Seconds$2,
  "this month": "هذا الشهر",
  "last month": "الشهر الماضي",
  Month: Month$2,
  Months: Months$2,
  Day: Day$2,
  Days: Days$2,
  Hours: Hours$2,
  Hour: Hour$2,
  Minutes: Minutes$2,
  Minute: Minute$2,
  Key: Key$2,
  Subject: Subject$2,
  "Attach files": "إرفاق الملفات",
  Priority: Priority$2,
  "Date": "التاريخ",
  Updated: Updated$2,
  Customer: Customer$2,
  Department: Department$2,
  "Assigned to": "مُسند إلى",
  "Ticket type": "نوع التذكرة",
  Category: Category$2,
  Created: Created$2,
  "Request Details": "تفاصيل الطلب",
  "Attach File": "إرفاق ملف",
  "Delete Ticket": "حذف التذكرة",
  Save: Save$2,
  "Ticket discussion": "مناقشة التذكرة",
  Ticket: Ticket$2,
  FAQ: FAQ$2,
  "Create Ticket": "إنشاء تذكرة",
  "New Ticket": "تذكرة جديدة",
  "Create FAQ": "إنشاء سؤال شائع",
  "Filter by priority": "تصفية حسب الأولوية",
  "Filter by status": "تصفية حسب الحالة",
  "Delete FAQ": "حذف السؤال الشائع",
  Title: Title$2,
  Details: Details$2,
  Note: Note$2,
  Submit: Submit$2,
  Cancel: Cancel$2,
  "Delete note": "حذف الملاحظة",
  Organization: Organization$2,
  Province: Province$2,
  State: State$2,
  "Postal code": "الرمز البريدي",
  "Delete Organization": "حذف المنظمة",
  "Update Organization": "تحديث المنظمة",
  Delete: Delete$2,
  Update: Update$2,
  Create: Create$2,
  "Create Customer": "إنشاء عميل",
  "Manage Users": "إدارة المستخدمين",
  "Default Language": "اللغة الافتراضية",
  "Email Notifications": "إشعارات البريد الإلكتروني",
  "Create ticket by new customer": "إنشاء تذكرة بواسطة عميل جديد",
  "Create ticket from dashboard": "إنشاء تذكرة من لوحة التحكم",
  "Status or priority changes": "تغييرات الحالة أو الأولوية",
  "Create a new user": "إنشاء مستخدم جديد",
  "Email Template": "قالب البريد الإلكتروني",
  "SMTP Host": "مضيف SMTP",
  "SMTP Port": "منفذ SMTP",
  "SMTP Username": "اسم مستخدم SMTP",
  "SMTP Password": "كلمة مرور SMTP",
  Location: Location$2,
  "Phone number": "رقم الهاتف",
  "Email address": "عنوان البريد الإلكتروني",
  "Add New": "إضافة جديد",
  Privacy: Privacy$2,
  Company: Company$2,
  Subscribe: Subscribe$2,
  Login: Login$2,
  "Submit ticket": "إرسال التذكرة",
  "terms and conditions": "الشروط والأحكام",
  "I agree with the": "أنا أوافق على",
  "Don’t have account?": "ليس لديك حساب؟",
  "Remember Me": "تذكرني",
  "Reset Password": "إعادة تعيين كلمة المرور",
  "Already have an account?": "هل لديك حساب بالفعل؟",
  "Good Morning": "صباح الخير",
  "Good Noon": "ظهر سعيد",
  "Good Evening": "مساء الخير",
  "Good Afternoon": "مساء الخير",
  Hello: Hello$2,
  "Forgot your password?": "هل نسيت كلمة المرور؟",
  "Send Password Reset Link": "إرسال رابط إعادة تعيين كلمة المرور",
  Registration: Registration$2
};
const __vite_glob_1_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Address: Address$2,
  Admin: Admin$2,
  Average: Average$2,
  Blog: Blog$2,
  Cancel: Cancel$2,
  Categories: Categories$2,
  Category: Category$2,
  Chat: Chat$2,
  City: City$2,
  Company: Company$2,
  Contact: Contact$2,
  Contacts: Contacts$2,
  Country: Country$2,
  Create: Create$2,
  Created: Created$2,
  Customer: Customer$2,
  Customers: Customers$2,
  Dashboard: Dashboard$2,
  Day: Day$2,
  Days: Days$2,
  Delete: Delete$2,
  Department: Department$2,
  Departments: Departments$2,
  Details: Details$2,
  Development: Development$2,
  Email: Email$2,
  Event: Event$2,
  FAQ: FAQ$2,
  FAQs: FAQs$2,
  Filter: Filter$2,
  Global: Global$2,
  Hardware: Hardware$2,
  Hello: Hello$2,
  Hour: Hour$2,
  Hours: Hours$2,
  Key: Key$2,
  Location: Location$2,
  Login: Login$2,
  Logout: Logout$2,
  Management: Management$2,
  Minute: Minute$2,
  Minutes: Minutes$2,
  Month: Month$2,
  Months: Months$2,
  More: More$2,
  Name: Name$2,
  Note: Note$2,
  Notes: Notes$2,
  Organization: Organization$2,
  Organizations: Organizations$2,
  Password: Password$2,
  Phone: Phone$2,
  Photo: Photo$2,
  Priorities: Priorities$2,
  Priority: Priority$2,
  Privacy: Privacy$2,
  Province: Province$2,
  Pusher: Pusher$2,
  Registration: Registration$2,
  Reset: Reset$2,
  Role: Role$2,
  Save: Save$2,
  Seconds: Seconds$2,
  Service: Service$2,
  Services: Services$2,
  Settings: Settings$2,
  Software: Software$2,
  State: State$2,
  Status: Status$2,
  Subject: Subject$2,
  Submit: Submit$2,
  Subscribe: Subscribe$2,
  Technical: Technical$2,
  Ticket: Ticket$2,
  Tickets: Tickets$2,
  Title: Title$2,
  Trashed: Trashed$2,
  Types: Types$2,
  Update: Update$2,
  Updated: Updated$2,
  Users: Users$2,
  default: sa
}, Symbol.toStringTag, { value: "Module" }));
const Dashboard$1 = "Instrumentpanel";
const Logout$1 = "Logga ut";
const Tickets$1 = "Biljetter";
const Chat$1 = "Chatt";
const FAQs$1 = "Vanliga frågor";
const Blog$1 = "Blogg";
const More$1 = "Mer";
const Notes$1 = "Anteckningar";
const Contacts$1 = "Kontakter";
const Organizations$1 = "Organisationer";
const Users$1 = "Användare";
const Customers$1 = "Kunder";
const Settings$1 = "Inställningar";
const Global$1 = "Global";
const Categories$1 = "Kategorier";
const Status$1 = "Status";
const Priorities$1 = "Prioriteringar";
const Departments$1 = "Avdelningar";
const Types$1 = "Typer";
const Pusher$1 = "Pusher";
const Contact$1 = "Kontakt";
const Services$1 = "Tjänster";
const Filter$1 = "Filtrera";
const Trashed$1 = "Borttaget";
const Reset$1 = "Återställ";
const Name$1 = "Namn";
const Email$1 = "E-post";
const Phone$1 = "Telefon";
const Country$1 = "Land";
const City$1 = "Stad";
const Address$1 = "Adress";
const Password$1 = "Lösenord";
const Role$1 = "Roll";
const Photo$1 = "Foto";
const Technical$1 = "Teknisk";
const Hardware$1 = "Hårdvara";
const Development$1 = "Utveckling";
const Management$1 = "Ledning";
const Admin$1 = "Admin";
const Software$1 = "Mjukvara";
const Service$1 = "Tjänst";
const Event$1 = "Händelse";
const Average$1 = "Genomsnitt";
const Seconds$1 = "Sekunder";
const Month$1 = "Månad";
const Months$1 = "Månader";
const Day$1 = "Dag";
const Days$1 = "Dagar";
const Hours$1 = "Timmar";
const Hour$1 = "Timme";
const Minutes$1 = "Minuter";
const Minute$1 = "Minut";
const Key$1 = "Nyckel";
const Subject$1 = "Ämne";
const Priority$1 = "Prioritet";
const Updated$1 = "Uppdaterad";
const Customer$1 = "Kund";
const Department$1 = "Avdelning";
const Category$1 = "Kategori";
const Created$1 = "Skapad";
const Save$1 = "Spara";
const Ticket$1 = "Biljett";
const FAQ$1 = "FAQ";
const Title$1 = "Titel";
const Details$1 = "Detaljer";
const Note$1 = "Anteckning";
const Submit$1 = "Skicka in";
const Cancel$1 = "Avbryt";
const Organization$1 = "Organisation";
const Province$1 = "Provins";
const State$1 = "Stat";
const Delete$1 = "Radera";
const Update$1 = "Uppdatera";
const Create$1 = "Skapa";
const Location$1 = "Plats";
const Privacy$1 = "Sekretess";
const Company$1 = "Företag";
const Subscribe$1 = "Prenumerera";
const Login$1 = "Logga in";
const Hello$1 = "Hej";
const Registration$1 = "Registrering";
const se = {
  "Edit Profile": "Redigera profil",
  Dashboard: Dashboard$1,
  Logout: Logout$1,
  Tickets: Tickets$1,
  Chat: Chat$1,
  FAQs: FAQs$1,
  Blog: Blog$1,
  "Knowledge Base": "Kunskapsbas",
  More: More$1,
  Notes: Notes$1,
  Contacts: Contacts$1,
  Organizations: Organizations$1,
  Users: Users$1,
  Customers: Customers$1,
  Settings: Settings$1,
  Global: Global$1,
  Categories: Categories$1,
  Status: Status$1,
  Priorities: Priorities$1,
  Departments: Departments$1,
  Types: Types$1,
  "Email Templates": "E-postmallar",
  "SMTP Mail": "SMTP-mejl",
  Pusher: Pusher$1,
  "Pusher Chat": "Pusher Chatt",
  "Front Pages": "Framsidor",
  Contact: Contact$1,
  Services: Services$1,
  "Privacy Policy": "Integritetspolicy",
  "Terms of Services": "Användarvillkor",
  Filter: Filter$1,
  Trashed: Trashed$1,
  "Trashed With": "Borttaget med",
  "Only Trashed": "Endast borttaget",
  "Search...": "Sök...",
  Reset: Reset$1,
  Name: Name$1,
  Email: Email$1,
  Phone: Phone$1,
  Country: Country$1,
  "Create User": "Skapa användare",
  "First Name": "Förnamn",
  "First name": "Förnamn",
  "Last Name": "Efternamn",
  "Last name": "Efternamn",
  City: City$1,
  Address: Address$1,
  Password: Password$1,
  Role: Role$1,
  Photo: Photo$1,
  "New Tickets": "Nya biljetter",
  "Open Tickets": "Öppna biljetter",
  "Closed Tickets": "Stängda biljetter",
  "Unassigned Tickets": "Oallokerade biljetter",
  "Ticket by department": "Biljetter per avdelning",
  "Ticket by type": "Biljetter per typ",
  "Top ticket creator": "Topp biljett skapare",
  "Ticket history": "Biljetthistorik",
  "First Response Time": "Första svarstid",
  "Last Response Time": "Senaste svarstid",
  Technical: Technical$1,
  Hardware: Hardware$1,
  Development: Development$1,
  Management: Management$1,
  Admin: Admin$1,
  Software: Software$1,
  Service: Service$1,
  Event: Event$1,
  Average: Average$1,
  Seconds: Seconds$1,
  "this month": "denna månad",
  "last month": "förra månaden",
  Month: Month$1,
  Months: Months$1,
  Day: Day$1,
  Days: Days$1,
  Hours: Hours$1,
  Hour: Hour$1,
  Minutes: Minutes$1,
  Minute: Minute$1,
  Key: Key$1,
  Subject: Subject$1,
  "Attach files": "Bifoga filer",
  Priority: Priority$1,
  "Date": "Datum",
  Updated: Updated$1,
  Customer: Customer$1,
  Department: Department$1,
  "Assigned to": "Tilldelad till",
  "Ticket type": "Biljettyp",
  Category: Category$1,
  Created: Created$1,
  "Request Details": "Begär detaljer",
  "Attach File": "Bifoga fil",
  "Delete Ticket": "Radera biljett",
  Save: Save$1,
  "Ticket discussion": "Biljett diskussion",
  Ticket: Ticket$1,
  FAQ: FAQ$1,
  "Create Ticket": "Skapa biljett",
  "New Ticket": "Ny biljett",
  "Create FAQ": "Skapa FAQ",
  "Filter by priority": "Filtrera efter prioritet",
  "Filter by status": "Filtrera efter status",
  "Delete FAQ": "Radera FAQ",
  Title: Title$1,
  Details: Details$1,
  Note: Note$1,
  Submit: Submit$1,
  Cancel: Cancel$1,
  "Delete note": "Radera anteckning",
  Organization: Organization$1,
  Province: Province$1,
  State: State$1,
  "Postal code": "Postnummer",
  "Delete Organization": "Radera organisation",
  "Update Organization": "Uppdatera organisation",
  Delete: Delete$1,
  Update: Update$1,
  Create: Create$1,
  "Create Customer": "Skapa kund",
  "Manage Users": "Hantera användare",
  "Default Language": "Standard språk",
  "Email Notifications": "E-postaviseringar",
  "Create ticket by new customer": "Skapa biljett av ny kund",
  "Create ticket from dashboard": "Skapa biljett från instrumentpanelen",
  "Status or priority changes": "Status eller prioritet ändringar",
  "Create a new user": "Skapa en ny användare",
  "Email Template": "E-postmall",
  "SMTP Host": "SMTP-värd",
  "SMTP Port": "SMTP-port",
  "SMTP Username": "SMTP-användarnamn",
  "SMTP Password": "SMTP-lösenord",
  Location: Location$1,
  "Phone number": "Telefonnummer",
  "Email address": "E-postadress",
  "Add New": "Lägg till ny",
  Privacy: Privacy$1,
  Company: Company$1,
  Subscribe: Subscribe$1,
  Login: Login$1,
  "Submit ticket": "Skicka in biljett",
  "terms and conditions": "villkor och bestämmelser",
  "I agree with the": "Jag godkänner",
  "Don’t have account?": "Har du inget konto?",
  "Remember Me": "Kom ihåg mig",
  "Reset Password": "Återställ lösenord",
  "Already have an account?": "Har du redan ett konto?",
  "Good Morning": "God morgon",
  "Good Noon": "God middag",
  "Good Evening": "God kväll",
  "Good Afternoon": "God eftermiddag",
  Hello: Hello$1,
  "Forgot your password?": "Glömt ditt lösenord?",
  "Send Password Reset Link": "Skicka länk för lösenordsåterställning",
  Registration: Registration$1
};
const __vite_glob_1_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Address: Address$1,
  Admin: Admin$1,
  Average: Average$1,
  Blog: Blog$1,
  Cancel: Cancel$1,
  Categories: Categories$1,
  Category: Category$1,
  Chat: Chat$1,
  City: City$1,
  Company: Company$1,
  Contact: Contact$1,
  Contacts: Contacts$1,
  Country: Country$1,
  Create: Create$1,
  Created: Created$1,
  Customer: Customer$1,
  Customers: Customers$1,
  Dashboard: Dashboard$1,
  Day: Day$1,
  Days: Days$1,
  Delete: Delete$1,
  Department: Department$1,
  Departments: Departments$1,
  Details: Details$1,
  Development: Development$1,
  Email: Email$1,
  Event: Event$1,
  FAQ: FAQ$1,
  FAQs: FAQs$1,
  Filter: Filter$1,
  Global: Global$1,
  Hardware: Hardware$1,
  Hello: Hello$1,
  Hour: Hour$1,
  Hours: Hours$1,
  Key: Key$1,
  Location: Location$1,
  Login: Login$1,
  Logout: Logout$1,
  Management: Management$1,
  Minute: Minute$1,
  Minutes: Minutes$1,
  Month: Month$1,
  Months: Months$1,
  More: More$1,
  Name: Name$1,
  Note: Note$1,
  Notes: Notes$1,
  Organization: Organization$1,
  Organizations: Organizations$1,
  Password: Password$1,
  Phone: Phone$1,
  Photo: Photo$1,
  Priorities: Priorities$1,
  Priority: Priority$1,
  Privacy: Privacy$1,
  Province: Province$1,
  Pusher: Pusher$1,
  Registration: Registration$1,
  Reset: Reset$1,
  Role: Role$1,
  Save: Save$1,
  Seconds: Seconds$1,
  Service: Service$1,
  Services: Services$1,
  Settings: Settings$1,
  Software: Software$1,
  State: State$1,
  Status: Status$1,
  Subject: Subject$1,
  Submit: Submit$1,
  Subscribe: Subscribe$1,
  Technical: Technical$1,
  Ticket: Ticket$1,
  Tickets: Tickets$1,
  Title: Title$1,
  Trashed: Trashed$1,
  Types: Types$1,
  Update: Update$1,
  Updated: Updated$1,
  Users: Users$1,
  default: se
}, Symbol.toStringTag, { value: "Module" }));
const Dashboard = "Kontrol Paneli";
const Logout = "Çıkış Yap";
const Tickets = "Biletler";
const Chat = "Sohbet";
const FAQs = "SSS";
const Blog = "Blog";
const More = "Daha Fazla";
const Notes = "Notlar";
const Contacts = "Kişiler";
const Organizations = "Organizasyonlar";
const Users = "Kullanıcılar";
const Customers = "Müşteriler";
const Settings = "Ayarlar";
const Global = "Küresel";
const Categories = "Kategoriler";
const Status = "Durum";
const Priorities = "Öncelikler";
const Departments = "Departmanlar";
const Types = "Türler";
const Pusher = "Pusher";
const Contact = "İletişim";
const Services = "Hizmetler";
const Filter = "Filtrele";
const Trashed = "Çöp Kutusu";
const Reset = "Sıfırla";
const Name = "Ad";
const Email = "E-posta";
const Phone = "Telefon";
const Country = "Ülke";
const City = "Şehir";
const Address = "Adres";
const Password = "Şifre";
const Role = "Rol";
const Photo = "Fotoğraf";
const Technical = "Teknik";
const Hardware = "Donanım";
const Development = "Geliştirme";
const Management = "Yönetim";
const Admin = "Yönetici";
const Software = "Yazılım";
const Service = "Hizmet";
const Event = "Etkinlik";
const Average = "Ortalama";
const Seconds = "Saniye";
const Month = "Ay";
const Months = "Aylar";
const Day = "Gün";
const Days = "Günler";
const Hours = "Saatler";
const Hour = "Saat";
const Minutes = "Dakika";
const Minute = "Dakika";
const Key = "Anahtar";
const Subject = "Konu";
const Priority = "Öncelik";
const Updated = "Güncellendi";
const Customer = "Müşteri";
const Department = "Departman";
const Category = "Kategori";
const Created = "Oluşturuldu";
const Save = "Kaydet";
const Ticket = "Bilet";
const FAQ = "SSS";
const Title = "Başlık";
const Details = "Detaylar";
const Note = "Not";
const Submit = "Gönder";
const Cancel = "İptal";
const Organization = "Organizasyon";
const Province = "Bölge";
const State = "Eyalet";
const Delete = "Sil";
const Update = "Güncelle";
const Create = "Oluştur";
const Location = "Konum";
const Privacy = "Gizlilik";
const Company = "Şirket";
const Subscribe = "Abone Ol";
const Login = "Giriş Yap";
const Hello = "Merhaba";
const Registration = "Kayıt";
const tr = {
  "Edit Profile": "Profili Düzenle",
  Dashboard,
  Logout,
  Tickets,
  Chat,
  FAQs,
  Blog,
  "Knowledge Base": "Bilgi Bankası",
  More,
  Notes,
  Contacts,
  Organizations,
  Users,
  Customers,
  Settings,
  Global,
  Categories,
  Status,
  Priorities,
  Departments,
  Types,
  "Email Templates": "E-posta Şablonları",
  "SMTP Mail": "SMTP Posta",
  Pusher,
  "Pusher Chat": "Pusher Sohbet",
  "Front Pages": "Ön Sayfalar",
  Contact,
  Services,
  "Privacy Policy": "Gizlilik Politikası",
  "Terms of Services": "Hizmet Şartları",
  Filter,
  Trashed,
  "Trashed With": "Çöp Kutusundakiler",
  "Only Trashed": "Sadece Çöp Kutusundakiler",
  "Search...": "Ara...",
  Reset,
  Name,
  Email,
  Phone,
  Country,
  "Create User": "Kullanıcı Oluştur",
  "First Name": "Ad",
  "First name": "Ad",
  "Last Name": "Soyad",
  "Last name": "Soyad",
  City,
  Address,
  Password,
  Role,
  Photo,
  "New Tickets": "Yeni Biletler",
  "Open Tickets": "Açık Biletler",
  "Closed Tickets": "Kapalı Biletler",
  "Unassigned Tickets": "Atanmamış Biletler",
  "Ticket by department": "Departmana Göre Bilet",
  "Ticket by type": "Türüne Göre Bilet",
  "Top ticket creator": "En Çok Bilet Oluşturan",
  "Ticket history": "Bilet Geçmişi",
  "First Response Time": "İlk Yanıt Süresi",
  "Last Response Time": "Son Yanıt Süresi",
  Technical,
  Hardware,
  Development,
  Management,
  Admin,
  Software,
  Service,
  Event,
  Average,
  Seconds,
  "this month": "bu ay",
  "last month": "geçen ay",
  Month,
  Months,
  Day,
  Days,
  Hours,
  Hour,
  Minutes,
  Minute,
  Key,
  Subject,
  "Attach files": "Dosya Ekle",
  Priority,
  "Date": "Tarih",
  Updated,
  Customer,
  Department,
  "Assigned to": "Atanan",
  "Ticket type": "Bilet Türü",
  Category,
  Created,
  "Request Details": "Talep Detayları",
  "Attach File": "Dosya Ekle",
  "Delete Ticket": "Bileti Sil",
  Save,
  "Ticket discussion": "Bilet Tartışması",
  Ticket,
  FAQ,
  "Create Ticket": "Bilet Oluştur",
  "New Ticket": "Yeni Bilet",
  "Create FAQ": "SSS Oluştur",
  "Filter by priority": "Önceliğe Göre Filtrele",
  "Filter by status": "Duruma Göre Filtrele",
  "Delete FAQ": "SSS Sil",
  Title,
  Details,
  Note,
  Submit,
  Cancel,
  "Delete note": "Notu Sil",
  Organization,
  Province,
  State,
  "Postal code": "Posta Kodu",
  "Delete Organization": "Organizasyonu Sil",
  "Update Organization": "Organizasyonu Güncelle",
  Delete,
  Update,
  Create,
  "Create Customer": "Müşteri Oluştur",
  "Manage Users": "Kullanıcıları Yönet",
  "Default Language": "Varsayılan Dil",
  "Email Notifications": "E-posta Bildirimleri",
  "Create ticket by new customer": "Yeni Müşteri İçin Bilet Oluştur",
  "Create ticket from dashboard": "Kontrol Panelinden Bilet Oluştur",
  "Status or priority changes": "Durum veya Öncelik Değişiklikleri",
  "Create a new user": "Yeni Kullanıcı Oluştur",
  "Email Template": "E-posta Şablonu",
  "SMTP Host": "SMTP Sunucusu",
  "SMTP Port": "SMTP Bağlantı Noktası",
  "SMTP Username": "SMTP Kullanıcı Adı",
  "SMTP Password": "SMTP Şifresi",
  Location,
  "Phone number": "Telefon Numarası",
  "Email address": "E-posta Adresi",
  "Add New": "Yeni Ekle",
  Privacy,
  Company,
  Subscribe,
  Login,
  "Submit ticket": "Bilet Gönder",
  "terms and conditions": "şartlar ve koşullar",
  "I agree with the": "Kabul ediyorum",
  "Don’t have account?": "Hesabınız yok mu?",
  "Remember Me": "Beni Hatırla",
  "Reset Password": "Şifreyi Sıfırla",
  "Already have an account?": "Zaten bir hesabınız var mı?",
  "Good Morning": "Günaydın",
  "Good Noon": "Tünaydın",
  "Good Evening": "İyi Akşamlar",
  "Good Afternoon": "İyi Günler",
  Hello,
  "Forgot your password?": "Şifrenizi mi unuttunuz?",
  "Send Password Reset Link": "Şifre Sıfırlama Bağlantısını Gönder",
  Registration
};
const __vite_glob_1_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Address,
  Admin,
  Average,
  Blog,
  Cancel,
  Categories,
  Category,
  Chat,
  City,
  Company,
  Contact,
  Contacts,
  Country,
  Create,
  Created,
  Customer,
  Customers,
  Dashboard,
  Day,
  Days,
  Delete,
  Department,
  Departments,
  Details,
  Development,
  Email,
  Event,
  FAQ,
  FAQs,
  Filter,
  Global,
  Hardware,
  Hello,
  Hour,
  Hours,
  Key,
  Location,
  Login,
  Logout,
  Management,
  Minute,
  Minutes,
  Month,
  Months,
  More,
  Name,
  Note,
  Notes,
  Organization,
  Organizations,
  Password,
  Phone,
  Photo,
  Priorities,
  Priority,
  Privacy,
  Province,
  Pusher,
  Registration,
  Reset,
  Role,
  Save,
  Seconds,
  Service,
  Services,
  Settings,
  Software,
  State,
  Status,
  Subject,
  Submit,
  Subscribe,
  Technical,
  Ticket,
  Tickets,
  Title,
  Trashed,
  Types,
  Update,
  Updated,
  Users,
  default: tr
}, Symbol.toStringTag, { value: "Module" }));
async function resolvePageComponent(path, pages) {
  for (const p2 of Array.isArray(path) ? path : [path]) {
    const page = pages[p2];
    if (typeof page === "undefined") {
      continue;
    }
    return typeof page === "function" ? page() : page;
  }
  throw new Error(`Page not found: ${path}`);
}
function t() {
  return t = Object.assign ? Object.assign.bind() : function(t4) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var r2 = arguments[e2];
      for (var n2 in r2) ({}).hasOwnProperty.call(r2, n2) && (t4[n2] = r2[n2]);
    }
    return t4;
  }, t.apply(null, arguments);
}
var e = String.prototype.replace, r = /%20/g, n = "RFC3986", o = { default: n, formatters: { RFC1738: function(t4) {
  return e.call(t4, r, "+");
}, RFC3986: function(t4) {
  return String(t4);
} }, RFC1738: "RFC1738", RFC3986: n }, i = Object.prototype.hasOwnProperty, u = Array.isArray, a = function() {
  for (var t4 = [], e2 = 0; e2 < 256; ++e2) t4.push("%" + ((e2 < 16 ? "0" : "") + e2.toString(16)).toUpperCase());
  return t4;
}(), s = function(t4, e2) {
  for (var r2 = e2 && e2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, n2 = 0; n2 < t4.length; ++n2) void 0 !== t4[n2] && (r2[n2] = t4[n2]);
  return r2;
}, f = { arrayToObject: s, assign: function(t4, e2) {
  return Object.keys(e2).reduce(function(t5, r2) {
    return t5[r2] = e2[r2], t5;
  }, t4);
}, combine: function(t4, e2) {
  return [].concat(t4, e2);
}, compact: function(t4) {
  for (var e2 = [{ obj: { o: t4 }, prop: "o" }], r2 = [], n2 = 0; n2 < e2.length; ++n2) for (var o2 = e2[n2], i2 = o2.obj[o2.prop], a2 = Object.keys(i2), s2 = 0; s2 < a2.length; ++s2) {
    var f2 = a2[s2], c2 = i2[f2];
    "object" == typeof c2 && null !== c2 && -1 === r2.indexOf(c2) && (e2.push({ obj: i2, prop: f2 }), r2.push(c2));
  }
  return function(t5) {
    for (; t5.length > 1; ) {
      var e3 = t5.pop(), r3 = e3.obj[e3.prop];
      if (u(r3)) {
        for (var n3 = [], o3 = 0; o3 < r3.length; ++o3) void 0 !== r3[o3] && n3.push(r3[o3]);
        e3.obj[e3.prop] = n3;
      }
    }
  }(e2), t4;
}, decode: function(t4, e2, r2) {
  var n2 = t4.replace(/\+/g, " ");
  if ("iso-8859-1" === r2) return n2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n2);
  } catch (t5) {
    return n2;
  }
}, encode: function(t4, e2, r2, n2, i2) {
  if (0 === t4.length) return t4;
  var u2 = t4;
  if ("symbol" == typeof t4 ? u2 = Symbol.prototype.toString.call(t4) : "string" != typeof t4 && (u2 = String(t4)), "iso-8859-1" === r2) return escape(u2).replace(/%u[0-9a-f]{4}/gi, function(t5) {
    return "%26%23" + parseInt(t5.slice(2), 16) + "%3B";
  });
  for (var s2 = "", f2 = 0; f2 < u2.length; ++f2) {
    var c2 = u2.charCodeAt(f2);
    45 === c2 || 46 === c2 || 95 === c2 || 126 === c2 || c2 >= 48 && c2 <= 57 || c2 >= 65 && c2 <= 90 || c2 >= 97 && c2 <= 122 || i2 === o.RFC1738 && (40 === c2 || 41 === c2) ? s2 += u2.charAt(f2) : c2 < 128 ? s2 += a[c2] : c2 < 2048 ? s2 += a[192 | c2 >> 6] + a[128 | 63 & c2] : c2 < 55296 || c2 >= 57344 ? s2 += a[224 | c2 >> 12] + a[128 | c2 >> 6 & 63] + a[128 | 63 & c2] : (c2 = 65536 + ((1023 & c2) << 10 | 1023 & u2.charCodeAt(f2 += 1)), s2 += a[240 | c2 >> 18] + a[128 | c2 >> 12 & 63] + a[128 | c2 >> 6 & 63] + a[128 | 63 & c2]);
  }
  return s2;
}, isBuffer: function(t4) {
  return !(!t4 || "object" != typeof t4 || !(t4.constructor && t4.constructor.isBuffer && t4.constructor.isBuffer(t4)));
}, isRegExp: function(t4) {
  return "[object RegExp]" === Object.prototype.toString.call(t4);
}, maybeMap: function(t4, e2) {
  if (u(t4)) {
    for (var r2 = [], n2 = 0; n2 < t4.length; n2 += 1) r2.push(e2(t4[n2]));
    return r2;
  }
  return e2(t4);
}, merge: function t2(e2, r2, n2) {
  if (!r2) return e2;
  if ("object" != typeof r2) {
    if (u(e2)) e2.push(r2);
    else {
      if (!e2 || "object" != typeof e2) return [e2, r2];
      (n2 && (n2.plainObjects || n2.allowPrototypes) || !i.call(Object.prototype, r2)) && (e2[r2] = true);
    }
    return e2;
  }
  if (!e2 || "object" != typeof e2) return [e2].concat(r2);
  var o2 = e2;
  return u(e2) && !u(r2) && (o2 = s(e2, n2)), u(e2) && u(r2) ? (r2.forEach(function(r3, o3) {
    if (i.call(e2, o3)) {
      var u2 = e2[o3];
      u2 && "object" == typeof u2 && r3 && "object" == typeof r3 ? e2[o3] = t2(u2, r3, n2) : e2.push(r3);
    } else e2[o3] = r3;
  }), e2) : Object.keys(r2).reduce(function(e3, o3) {
    var u2 = r2[o3];
    return e3[o3] = i.call(e3, o3) ? t2(e3[o3], u2, n2) : u2, e3;
  }, o2);
} }, c = Object.prototype.hasOwnProperty, l = { brackets: function(t4) {
  return t4 + "[]";
}, comma: "comma", indices: function(t4, e2) {
  return t4 + "[" + e2 + "]";
}, repeat: function(t4) {
  return t4;
} }, p = Array.isArray, h = String.prototype.split, y = Array.prototype.push, d = function(t4, e2) {
  y.apply(t4, p(e2) ? e2 : [e2]);
}, g = Date.prototype.toISOString, b = o.default, v = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: f.encode, encodeValuesOnly: false, format: b, formatter: o.formatters[b], indices: false, serializeDate: function(t4) {
  return g.call(t4);
}, skipNulls: false, strictNullHandling: false }, m = function t3(e2, r2, n2, o2, i2, u2, a2, s2, c2, l2, y2, g2, b2, m2) {
  var j2, w2 = e2;
  if ("function" == typeof a2 ? w2 = a2(r2, w2) : w2 instanceof Date ? w2 = l2(w2) : "comma" === n2 && p(w2) && (w2 = f.maybeMap(w2, function(t4) {
    return t4 instanceof Date ? l2(t4) : t4;
  })), null === w2) {
    if (o2) return u2 && !b2 ? u2(r2, v.encoder, m2, "key", y2) : r2;
    w2 = "";
  }
  if ("string" == typeof (j2 = w2) || "number" == typeof j2 || "boolean" == typeof j2 || "symbol" == typeof j2 || "bigint" == typeof j2 || f.isBuffer(w2)) {
    if (u2) {
      var $2 = b2 ? r2 : u2(r2, v.encoder, m2, "key", y2);
      if ("comma" === n2 && b2) {
        for (var O2 = h.call(String(w2), ","), E2 = "", R2 = 0; R2 < O2.length; ++R2) E2 += (0 === R2 ? "" : ",") + g2(u2(O2[R2], v.encoder, m2, "value", y2));
        return [g2($2) + "=" + E2];
      }
      return [g2($2) + "=" + g2(u2(w2, v.encoder, m2, "value", y2))];
    }
    return [g2(r2) + "=" + g2(String(w2))];
  }
  var S2, x2 = [];
  if (void 0 === w2) return x2;
  if ("comma" === n2 && p(w2)) S2 = [{ value: w2.length > 0 ? w2.join(",") || null : void 0 }];
  else if (p(a2)) S2 = a2;
  else {
    var N2 = Object.keys(w2);
    S2 = s2 ? N2.sort(s2) : N2;
  }
  for (var T2 = 0; T2 < S2.length; ++T2) {
    var k2 = S2[T2], C = "object" == typeof k2 && void 0 !== k2.value ? k2.value : w2[k2];
    if (!i2 || null !== C) {
      var _ = p(w2) ? "function" == typeof n2 ? n2(r2, k2) : r2 : r2 + (c2 ? "." + k2 : "[" + k2 + "]");
      d(x2, t3(C, _, n2, o2, i2, u2, a2, s2, c2, l2, y2, g2, b2, m2));
    }
  }
  return x2;
}, j = Object.prototype.hasOwnProperty, w = Array.isArray, $ = { allowDots: false, allowPrototypes: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: f.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, O = function(t4) {
  return t4.replace(/&#(\d+);/g, function(t5, e2) {
    return String.fromCharCode(parseInt(e2, 10));
  });
}, E = function(t4, e2) {
  return t4 && "string" == typeof t4 && e2.comma && t4.indexOf(",") > -1 ? t4.split(",") : t4;
}, R = function(t4, e2, r2, n2) {
  if (t4) {
    var o2 = r2.allowDots ? t4.replace(/\.([^.[]+)/g, "[$1]") : t4, i2 = /(\[[^[\]]*])/g, u2 = r2.depth > 0 && /(\[[^[\]]*])/.exec(o2), a2 = u2 ? o2.slice(0, u2.index) : o2, s2 = [];
    if (a2) {
      if (!r2.plainObjects && j.call(Object.prototype, a2) && !r2.allowPrototypes) return;
      s2.push(a2);
    }
    for (var f2 = 0; r2.depth > 0 && null !== (u2 = i2.exec(o2)) && f2 < r2.depth; ) {
      if (f2 += 1, !r2.plainObjects && j.call(Object.prototype, u2[1].slice(1, -1)) && !r2.allowPrototypes) return;
      s2.push(u2[1]);
    }
    return u2 && s2.push("[" + o2.slice(u2.index) + "]"), function(t5, e3, r3, n3) {
      for (var o3 = n3 ? e3 : E(e3, r3), i3 = t5.length - 1; i3 >= 0; --i3) {
        var u3, a3 = t5[i3];
        if ("[]" === a3 && r3.parseArrays) u3 = [].concat(o3);
        else {
          u3 = r3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var s3 = "[" === a3.charAt(0) && "]" === a3.charAt(a3.length - 1) ? a3.slice(1, -1) : a3, f3 = parseInt(s3, 10);
          r3.parseArrays || "" !== s3 ? !isNaN(f3) && a3 !== s3 && String(f3) === s3 && f3 >= 0 && r3.parseArrays && f3 <= r3.arrayLimit ? (u3 = [])[f3] = o3 : "__proto__" !== s3 && (u3[s3] = o3) : u3 = { 0: o3 };
        }
        o3 = u3;
      }
      return o3;
    }(s2, e2, r2, n2);
  }
}, S = function(t4, e2) {
  var r2 = /* @__PURE__ */ function(t5) {
    return $;
  }();
  if ("" === t4 || null == t4) return r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n2 = "string" == typeof t4 ? function(t5, e3) {
    var r3, n3 = {}, o3 = (e3.ignoreQueryPrefix ? t5.replace(/^\?/, "") : t5).split(e3.delimiter, Infinity === e3.parameterLimit ? void 0 : e3.parameterLimit), i3 = -1, u3 = e3.charset;
    if (e3.charsetSentinel) for (r3 = 0; r3 < o3.length; ++r3) 0 === o3[r3].indexOf("utf8=") && ("utf8=%E2%9C%93" === o3[r3] ? u3 = "utf-8" : "utf8=%26%2310003%3B" === o3[r3] && (u3 = "iso-8859-1"), i3 = r3, r3 = o3.length);
    for (r3 = 0; r3 < o3.length; ++r3) if (r3 !== i3) {
      var a3, s3, c2 = o3[r3], l2 = c2.indexOf("]="), p2 = -1 === l2 ? c2.indexOf("=") : l2 + 1;
      -1 === p2 ? (a3 = e3.decoder(c2, $.decoder, u3, "key"), s3 = e3.strictNullHandling ? null : "") : (a3 = e3.decoder(c2.slice(0, p2), $.decoder, u3, "key"), s3 = f.maybeMap(E(c2.slice(p2 + 1), e3), function(t6) {
        return e3.decoder(t6, $.decoder, u3, "value");
      })), s3 && e3.interpretNumericEntities && "iso-8859-1" === u3 && (s3 = O(s3)), c2.indexOf("[]=") > -1 && (s3 = w(s3) ? [s3] : s3), n3[a3] = j.call(n3, a3) ? f.combine(n3[a3], s3) : s3;
    }
    return n3;
  }(t4, r2) : t4, o2 = r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i2 = Object.keys(n2), u2 = 0; u2 < i2.length; ++u2) {
    var a2 = i2[u2], s2 = R(a2, n2[a2], r2, "string" == typeof t4);
    o2 = f.merge(o2, s2, r2);
  }
  return f.compact(o2);
};
class x {
  constructor(t4, e2, r2) {
    var n2, o2;
    this.name = t4, this.definition = e2, this.bindings = null != (n2 = e2.bindings) ? n2 : {}, this.wheres = null != (o2 = e2.wheres) ? o2 : {}, this.config = r2;
  }
  get template() {
    const t4 = `${this.origin}/${this.definition.uri}`.replace(/\/+$/, "");
    return "" === t4 ? "/" : t4;
  }
  get origin() {
    return this.config.absolute ? this.definition.domain ? `${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port ? `:${this.config.port}` : ""}` : this.config.url : "";
  }
  get parameterSegments() {
    var t4, e2;
    return null != (t4 = null == (e2 = this.template.match(/{[^}?]+\??}/g)) ? void 0 : e2.map((t5) => ({ name: t5.replace(/{|\??}/g, ""), required: !/\?}$/.test(t5) }))) ? t4 : [];
  }
  matchesUrl(t4) {
    var e2;
    if (!this.definition.methods.includes("GET")) return false;
    const r2 = this.template.replace(/[.*+$()[\]]/g, "\\$&").replace(/(\/?){([^}?]*)(\??)}/g, (t5, e3, r3, n3) => {
      var o3;
      const i3 = `(?<${r3}>${(null == (o3 = this.wheres[r3]) ? void 0 : o3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+"})`;
      return n3 ? `(${e3}${i3})?` : `${e3}${i3}`;
    }).replace(/^\w+:\/\//, ""), [n2, o2] = t4.replace(/^\w+:\/\//, "").split("?"), i2 = null != (e2 = new RegExp(`^${r2}/?$`).exec(n2)) ? e2 : new RegExp(`^${r2}/?$`).exec(decodeURI(n2));
    if (i2) {
      for (const t5 in i2.groups) i2.groups[t5] = "string" == typeof i2.groups[t5] ? decodeURIComponent(i2.groups[t5]) : i2.groups[t5];
      return { params: i2.groups, query: S(o2) };
    }
    return false;
  }
  compile(t4) {
    return this.parameterSegments.length ? this.template.replace(/{([^}?]+)(\??)}/g, (e2, r2, n2) => {
      var o2, i2;
      if (!n2 && [null, void 0].includes(t4[r2])) throw new Error(`Ziggy error: '${r2}' parameter is required for route '${this.name}'.`);
      if (this.wheres[r2] && !new RegExp(`^${n2 ? `(${this.wheres[r2]})?` : this.wheres[r2]}$`).test(null != (i2 = t4[r2]) ? i2 : "")) throw new Error(`Ziggy error: '${r2}' parameter '${t4[r2]}' does not match required format '${this.wheres[r2]}' for route '${this.name}'.`);
      return encodeURI(null != (o2 = t4[r2]) ? o2 : "").replace(/%7C/g, "|").replace(/%25/g, "%").replace(/\$/g, "%24");
    }).replace(this.config.absolute ? /(\.[^/]+?)(\/\/)/ : /(^)(\/\/)/, "$1/").replace(/\/+$/, "") : this.template;
  }
}
class N extends String {
  constructor(e2, r2, n2 = true, o2) {
    if (super(), this.t = null != o2 ? o2 : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, this.t = t({}, this.t, { absolute: n2 }), e2) {
      if (!this.t.routes[e2]) throw new Error(`Ziggy error: route '${e2}' is not in the route list.`);
      this.i = new x(e2, this.t.routes[e2], this.t), this.u = this.l(r2);
    }
  }
  toString() {
    const e2 = Object.keys(this.u).filter((t4) => !this.i.parameterSegments.some(({ name: e3 }) => e3 === t4)).filter((t4) => "_query" !== t4).reduce((e3, r2) => t({}, e3, { [r2]: this.u[r2] }), {});
    return this.i.compile(this.u) + function(t4, e3) {
      var r2, n2 = t4, i2 = function(t5) {
        if (!t5) return v;
        if (null != t5.encoder && "function" != typeof t5.encoder) throw new TypeError("Encoder has to be a function.");
        var e4 = t5.charset || v.charset;
        if (void 0 !== t5.charset && "utf-8" !== t5.charset && "iso-8859-1" !== t5.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var r3 = o.default;
        if (void 0 !== t5.format) {
          if (!c.call(o.formatters, t5.format)) throw new TypeError("Unknown format option provided.");
          r3 = t5.format;
        }
        var n3 = o.formatters[r3], i3 = v.filter;
        return ("function" == typeof t5.filter || p(t5.filter)) && (i3 = t5.filter), { addQueryPrefix: "boolean" == typeof t5.addQueryPrefix ? t5.addQueryPrefix : v.addQueryPrefix, allowDots: void 0 === t5.allowDots ? v.allowDots : !!t5.allowDots, charset: e4, charsetSentinel: "boolean" == typeof t5.charsetSentinel ? t5.charsetSentinel : v.charsetSentinel, delimiter: void 0 === t5.delimiter ? v.delimiter : t5.delimiter, encode: "boolean" == typeof t5.encode ? t5.encode : v.encode, encoder: "function" == typeof t5.encoder ? t5.encoder : v.encoder, encodeValuesOnly: "boolean" == typeof t5.encodeValuesOnly ? t5.encodeValuesOnly : v.encodeValuesOnly, filter: i3, format: r3, formatter: n3, serializeDate: "function" == typeof t5.serializeDate ? t5.serializeDate : v.serializeDate, skipNulls: "boolean" == typeof t5.skipNulls ? t5.skipNulls : v.skipNulls, sort: "function" == typeof t5.sort ? t5.sort : null, strictNullHandling: "boolean" == typeof t5.strictNullHandling ? t5.strictNullHandling : v.strictNullHandling };
      }(e3);
      "function" == typeof i2.filter ? n2 = (0, i2.filter)("", n2) : p(i2.filter) && (r2 = i2.filter);
      var u2 = [];
      if ("object" != typeof n2 || null === n2) return "";
      var a2 = l[e3 && e3.arrayFormat in l ? e3.arrayFormat : e3 && "indices" in e3 ? e3.indices ? "indices" : "repeat" : "indices"];
      r2 || (r2 = Object.keys(n2)), i2.sort && r2.sort(i2.sort);
      for (var s2 = 0; s2 < r2.length; ++s2) {
        var f2 = r2[s2];
        i2.skipNulls && null === n2[f2] || d(u2, m(n2[f2], f2, a2, i2.strictNullHandling, i2.skipNulls, i2.encode ? i2.encoder : null, i2.filter, i2.sort, i2.allowDots, i2.serializeDate, i2.format, i2.formatter, i2.encodeValuesOnly, i2.charset));
      }
      var h2 = u2.join(i2.delimiter), y2 = true === i2.addQueryPrefix ? "?" : "";
      return i2.charsetSentinel && (y2 += "iso-8859-1" === i2.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), h2.length > 0 ? y2 + h2 : "";
    }(t({}, e2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: (t4, e3) => "boolean" == typeof t4 ? Number(t4) : e3(t4) });
  }
  p(e2) {
    e2 ? this.t.absolute && e2.startsWith("/") && (e2 = this.h().host + e2) : e2 = this.v();
    let r2 = {};
    const [n2, o2] = Object.entries(this.t.routes).find(([t4, n3]) => r2 = new x(t4, n3, this.t).matchesUrl(e2)) || [void 0, void 0];
    return t({ name: n2 }, r2, { route: o2 });
  }
  v() {
    const { host: t4, pathname: e2, search: r2 } = this.h();
    return (this.t.absolute ? t4 + e2 : e2.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + r2;
  }
  current(e2, r2) {
    const { name: n2, params: o2, query: i2, route: u2 } = this.p();
    if (!e2) return n2;
    const a2 = new RegExp(`^${e2.replace(/\./g, "\\.").replace(/\*/g, ".*")}$`).test(n2);
    if ([null, void 0].includes(r2) || !a2) return a2;
    const s2 = new x(n2, u2, this.t);
    r2 = this.l(r2, s2);
    const f2 = t({}, o2, i2);
    if (Object.values(r2).every((t4) => !t4) && !Object.values(f2).some((t4) => void 0 !== t4)) return true;
    const c2 = (t4, e3) => Object.entries(t4).every(([t5, r3]) => Array.isArray(r3) && Array.isArray(e3[t5]) ? r3.every((r4) => e3[t5].includes(r4)) : "object" == typeof r3 && "object" == typeof e3[t5] && null !== r3 && null !== e3[t5] ? c2(r3, e3[t5]) : e3[t5] == r3);
    return c2(r2, f2);
  }
  h() {
    var t4, e2, r2, n2, o2, i2;
    const { host: u2 = "", pathname: a2 = "", search: s2 = "" } = "undefined" != typeof window ? window.location : {};
    return { host: null != (t4 = null == (e2 = this.t.location) ? void 0 : e2.host) ? t4 : u2, pathname: null != (r2 = null == (n2 = this.t.location) ? void 0 : n2.pathname) ? r2 : a2, search: null != (o2 = null == (i2 = this.t.location) ? void 0 : i2.search) ? o2 : s2 };
  }
  get params() {
    const { params: e2, query: r2 } = this.p();
    return t({}, e2, r2);
  }
  get routeParams() {
    return this.p().params;
  }
  get queryParams() {
    return this.p().query;
  }
  has(t4) {
    return this.t.routes.hasOwnProperty(t4);
  }
  l(e2 = {}, r2 = this.i) {
    null != e2 || (e2 = {}), e2 = ["string", "number"].includes(typeof e2) ? [e2] : e2;
    const n2 = r2.parameterSegments.filter(({ name: t4 }) => !this.t.defaults[t4]);
    return Array.isArray(e2) ? e2 = e2.reduce((e3, r3, o2) => t({}, e3, n2[o2] ? { [n2[o2].name]: r3 } : "object" == typeof r3 ? r3 : { [r3]: "" }), {}) : 1 !== n2.length || e2[n2[0].name] || !e2.hasOwnProperty(Object.values(r2.bindings)[0]) && !e2.hasOwnProperty("id") || (e2 = { [n2[0].name]: e2 }), t({}, this.m(r2), this.j(e2, r2));
  }
  m(e2) {
    return e2.parameterSegments.filter(({ name: t4 }) => this.t.defaults[t4]).reduce((e3, { name: r2 }, n2) => t({}, e3, { [r2]: this.t.defaults[r2] }), {});
  }
  j(e2, { bindings: r2, parameterSegments: n2 }) {
    return Object.entries(e2).reduce((e3, [o2, i2]) => {
      if (!i2 || "object" != typeof i2 || Array.isArray(i2) || !n2.some(({ name: t4 }) => t4 === o2)) return t({}, e3, { [o2]: i2 });
      if (!i2.hasOwnProperty(r2[o2])) {
        if (!i2.hasOwnProperty("id")) throw new Error(`Ziggy error: object passed as '${o2}' parameter is missing route model binding key '${r2[o2]}'.`);
        r2[o2] = "id";
      }
      return t({}, e3, { [o2]: i2[r2[o2]] });
    }, {});
  }
  valueOf() {
    return this.toString();
  }
}
function T(t4, e2, r2, n2) {
  const o2 = new N(t4, e2, r2, n2);
  return t4 ? o2.toString() : o2;
}
const k = { install(t4, e2) {
  const r2 = (t5, r3, n2, o2 = e2) => T(t5, r3, n2, o2);
  parseInt(t4.version) > 2 ? (t4.config.globalProperties.route = r2, t4.provide("route", r2)) : t4.mixin({ methods: { route: r2 } });
} };
const appName = "HelpDesk";
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, /* @__PURE__ */ Object.assign({ "./Pages/Auth/ForgotPassword.vue": () => import("./assets/ForgotPassword-BuEX4fPs.js"), "./Pages/Auth/ForgotPasswordInput.vue": () => import("./assets/ForgotPasswordInput-BzN8L1t7.js"), "./Pages/Auth/Login.vue": () => import("./assets/Login-CsqjUCk6.js"), "./Pages/Auth/Register.vue": () => import("./assets/Register-BjrdYLIM.js"), "./Pages/Blank.vue": () => import("./assets/Blank-lhfraG1I.js"), "./Pages/Blogs/ByCategory.vue": () => import("./assets/ByCategory-PmC_8sAM.js"), "./Pages/Blogs/Create.vue": () => import("./assets/Create-BhJJi02L.js"), "./Pages/Blogs/Edit.vue": () => import("./assets/Edit-BjRZ6AOG.js"), "./Pages/Blogs/Index.vue": () => import("./assets/Index-BzNIAeMy.js"), "./Pages/Categories/Create.vue": () => import("./assets/Create-CjoM24fV.js"), "./Pages/Categories/Edit.vue": () => import("./assets/Edit-CH0R_9zL.js"), "./Pages/Categories/Index.vue": () => import("./assets/Index-B-IscGza.js"), "./Pages/Chat/Index.vue": () => import("./assets/Index-BPP7QVXF.js"), "./Pages/Cities/Create.vue": () => import("./assets/Create-DEKacave.js"), "./Pages/Cities/Edit.vue": () => import("./assets/Edit-B_pqlQVa.js"), "./Pages/Cities/Index.vue": () => import("./assets/Index-Drh-E7RK.js"), "./Pages/Contacts/Create.vue": () => import("./assets/Create-DOlCXcOR.js"), "./Pages/Contacts/Edit.vue": () => import("./assets/Edit-B3c4Sg0y.js"), "./Pages/Contacts/Index.vue": () => import("./assets/Index-CE6x0g95.js"), "./Pages/Customers/Create.vue": () => import("./assets/Create-BU9FBTEP.js"), "./Pages/Customers/Edit.vue": () => import("./assets/Edit-CzlQT4_r.js"), "./Pages/Customers/Index.vue": () => import("./assets/Index-CaqbKLi6.js"), "./Pages/Dashboard/Index.vue": () => import("./assets/Index--Ngv9GCd.js"), "./Pages/Departments/Create.vue": () => import("./assets/Create-CZcGvSSG.js"), "./Pages/Departments/Edit.vue": () => import("./assets/Edit-Ca3cCLIy.js"), "./Pages/Departments/Index.vue": () => import("./assets/Index-B_N36rXX.js"), "./Pages/EmailTemplates/Edit.vue": () => import("./assets/Edit-BF3X2rlh.js"), "./Pages/EmailTemplates/Index.vue": () => import("./assets/Index-CkAV74-F.js"), "./Pages/Error.vue": () => import("./assets/Error-Cy9ozrsg.js"), "./Pages/Faqs/Create.vue": () => import("./assets/Create-AY-92pgb.js"), "./Pages/Faqs/Edit.vue": () => import("./assets/Edit-CSY1pknX.js"), "./Pages/Faqs/Index.vue": () => import("./assets/Index-Dc-qsup0.js"), "./Pages/Faqs/Site.vue": () => import("./assets/Site-1eGnULQT.js"), "./Pages/FrontPages/Contact.vue": () => import("./assets/Contact-CRbivqgJ.js"), "./Pages/FrontPages/Footer.vue": () => import("./assets/Footer-CVGi4Ad6.js"), "./Pages/FrontPages/Home.vue": () => import("./assets/Home-ZweBVgFZ.js"), "./Pages/FrontPages/PrivacyPolicy.vue": () => import("./assets/PrivacyPolicy-vGCS54Lr.js"), "./Pages/FrontPages/Services.vue": () => import("./assets/Services-DaTyOhge.js"), "./Pages/FrontPages/TermsOfServices.vue": () => import("./assets/TermsOfServices-DYp9IWqb.js"), "./Pages/KnowledgeBase/Create.vue": () => import("./assets/Create-gh3dgYes.js"), "./Pages/KnowledgeBase/Det.vue": () => import("./assets/Det-BwWW4L_I.js"), "./Pages/KnowledgeBase/Edit.vue": () => import("./assets/Edit-CE1VYryd.js"), "./Pages/KnowledgeBase/Index.vue": () => import("./assets/Index-B73_ALAc.js"), "./Pages/Landing/Blog/ByType.vue": () => import("./assets/ByType-BnntJXpV.js"), "./Pages/Landing/Blog/Details.vue": () => import("./assets/Details-DcT7yg_1.js"), "./Pages/Landing/Blog/Index.vue": () => import("./assets/Index-CFmQPiBS.js"), "./Pages/Landing/Contact.vue": () => import("./assets/Contact-CHRZEP2r.js"), "./Pages/Landing/FAQ.vue": () => import("./assets/FAQ-CmmFZ4qv.js"), "./Pages/Landing/Home.vue": () => import("./assets/Home-9iTyMGER.js"), "./Pages/Landing/KnowledgeBase/ByType.vue": () => import("./assets/ByType-5CiYQGq_.js"), "./Pages/Landing/KnowledgeBase/Details.vue": () => import("./assets/Details-BXA6cq4W.js"), "./Pages/Landing/KnowledgeBase/Index.vue": () => import("./assets/Index-Dmd59SNo.js"), "./Pages/Landing/OpenTicket.vue": () => import("./assets/OpenTicket-nupgxUA3.js"), "./Pages/Landing/PrivacyPolicy.vue": () => import("./assets/PrivacyPolicy-NKQIXZ2N.js"), "./Pages/Landing/Services.vue": () => import("./assets/Services-B7IPXAJ7.js"), "./Pages/Landing/TermsOfServices.vue": () => import("./assets/TermsOfServices-Lk8F6gmk.js"), "./Pages/Languages/Create.vue": () => import("./assets/Create-DIloK1uT.js"), "./Pages/Languages/Edit.vue": () => import("./assets/Edit-CFvQBOcV.js"), "./Pages/Languages/Index.vue": () => import("./assets/Index-B6snsMsq.js"), "./Pages/Notes/Index.vue": () => import("./assets/Index-B8eYnJD7.js"), "./Pages/Organizations/Create.vue": () => import("./assets/Create-CdGBaiXr.js"), "./Pages/Organizations/Edit.vue": () => import("./assets/Edit-DVTNXUs3.js"), "./Pages/Organizations/Index.vue": () => import("./assets/Index-DvGLJq8h.js"), "./Pages/PendingUsers/Index.vue": () => import("./assets/Index-r3OiC681.js"), "./Pages/Priorities/Create.vue": () => import("./assets/Create-w8dTdfXo.js"), "./Pages/Priorities/Edit.vue": () => import("./assets/Edit-CjPc9jfT.js"), "./Pages/Priorities/Index.vue": () => import("./assets/Index-DdjeWAAU.js"), "./Pages/Reports/Index.vue": () => import("./assets/Index-DPK4yH4n.js"), "./Pages/Roles/Create.vue": () => import("./assets/Create-CgRuUbBH.js"), "./Pages/Roles/Edit.vue": () => import("./assets/Edit-CLahvjF7.js"), "./Pages/Roles/Index.vue": () => import("./assets/Index-CMmphyqK.js"), "./Pages/Settings/Index.vue": () => import("./assets/Index-CYBAhGuj.js"), "./Pages/Settings/Piping.vue": () => import("./assets/Piping-DHGs_5Xd.js"), "./Pages/Settings/Pusher.vue": () => import("./assets/Pusher-BeaHnH_G.js"), "./Pages/Settings/Smtp.vue": () => import("./assets/Smtp-Dr2UZVms.js"), "./Pages/Settings/Update.vue": () => import("./assets/Update-K9RHnOTh.js"), "./Pages/Statuses/Create.vue": () => import("./assets/Create-Kr8Wg2WL.js"), "./Pages/Statuses/Edit.vue": () => import("./assets/Edit-L-GZ5kTX.js"), "./Pages/Statuses/Index.vue": () => import("./assets/Index-gKDTxILG.js"), "./Pages/Tickets/Create.vue": () => import("./assets/Create-CORfoPah.js"), "./Pages/Tickets/Edit.vue": () => import("./assets/Edit-D5Sd7rx5.js"), "./Pages/Tickets/Index.vue": () => import("./assets/Index-D1bURYHW.js"), "./Pages/Tickets/builder.vue": () => import("./assets/builder-8ZgqSX4J.js"), "./Pages/Types/Create.vue": () => import("./assets/Create-BA_4JIkw.js"), "./Pages/Types/Edit.vue": () => import("./assets/Edit-QPVjZQcG.js"), "./Pages/Types/Index.vue": () => import("./assets/Index-BtbLfLy6.js"), "./Pages/Users/Create.vue": () => import("./assets/Create-CkUKA0ja.js"), "./Pages/Users/Edit.vue": () => import("./assets/Edit-DZMwUfWq.js"), "./Pages/Users/EditProfile.vue": () => import("./assets/EditProfile-_8219u_u.js"), "./Pages/Users/Index.vue": () => import("./assets/Index-DQg5nO26.js") })),
    setup({ App, props, plugin }) {
      return createSSRApp({ render: () => h$1(App, props) }).use(plugin).use(k, {
        ...page.props.ziggy,
        location: new URL(page.props.ziggy.location)
      }).use(i18nVue, {
        lang: "en",
        resolve: (lang) => {
          const langs = /* @__PURE__ */ Object.assign({ "../../lang/bd.json": __vite_glob_1_0, "../../lang/cn.json": __vite_glob_1_1, "../../lang/de.json": __vite_glob_1_2, "../../lang/en.json": __vite_glob_1_3, "../../lang/es.json": __vite_glob_1_4, "../../lang/fr.json": __vite_glob_1_5, "../../lang/he.json": __vite_glob_1_6, "../../lang/it.json": __vite_glob_1_7, "../../lang/lt.json": __vite_glob_1_8, "../../lang/nl.json": __vite_glob_1_9, "../../lang/php_en.json": __vite_glob_1_10, "../../lang/pl.json": __vite_glob_1_11, "../../lang/pt.json": __vite_glob_1_12, "../../lang/sa.json": __vite_glob_1_13, "../../lang/se.json": __vite_glob_1_14, "../../lang/tr.json": __vite_glob_1_15 });
          return langs[`../../lang/${lang}.json`].default;
        }
      });
    }
  })
);
