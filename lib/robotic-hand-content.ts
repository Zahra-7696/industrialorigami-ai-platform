import type { Locale } from "@/i18n/config";

type TechnologyCard = {
  title: string;
  description: string;
};

type WorkflowStep = {
  title: string;
  description: string;
};

type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type RoboticHandDetailContent = {
  statusLabel: string;
  statusDescription: string;
  overviewTitle: string;
  overviewParagraphs: string[];
  galleryEyebrow: string;
  galleryTitle: string;
  galleryDescription: string;
  galleryNote: string;
  gallery: GalleryImage[];
  usefulnessEyebrow: string;
  usefulnessTitle: string;
  usefulnessDescription: string;
  usefulness: string[];
  architectureEyebrow: string;
  architectureTitle: string;
  architectureDescription: string;
  hardwareTitle: string;
  hardware: TechnologyCard[];
  softwareTitle: string;
  software: TechnologyCard[];
  workflowEyebrow: string;
  workflowTitle: string;
  workflowDescription: string;
  workflow: WorkflowStep[];
  evaluationEyebrow: string;
  evaluationTitle: string;
  evaluationDescription: string;
  metrics: string[];
  roadmapEyebrow: string;
  roadmapTitle: string;
};

export const roboticHandContent: Partial<Record<
  Locale,
  RoboticHandDetailContent
>> = {
  en: {
    statusLabel: "Current project status",
    statusDescription:
      "The project is in research, architecture and staged prototype development. The photographs below show early sensing and motion-capture experiments, not the final robotic-hand product.",
    overviewTitle: "What the project is",
    overviewParagraphs: [
      "The Intelligent Robotic Hand is a modular robotic manipulation platform intended to combine mechanical design, sensing, deterministic motor control, computer vision and edge artificial intelligence.",
      "The central research question is whether a hand can adapt its grasp to objects with different shapes, orientations, weights and fragility without requiring an engineer to program every finger movement separately.",
      "Development begins with measurable sub-systems, including human-hand motion capture, an index-finger and thumb mechanism, force and position sensing, and real-time motor control. These results will inform the design of the complete multi-finger prototype.",
    ],
    galleryEyebrow: "Development evidence",
    galleryTitle: "Hand sensing and motion-capture experiments",
    galleryDescription:
      "These images illustrate early work used to understand human-hand movement, joint relationships and sensor input before those behaviours are translated into a robotic mechanism.",
    galleryNote:
      "The images document experimental sensing and motion-capture work. They should not be presented as photographs of the final robotic-hand prototype.",
     gallery: [
       {
        src: "/projects/robotic-hand/hand-sensor.jpeg",
        alt: "Sensor equipment attached to a human hand during a motion-capture experiment",
       caption:
      "Sensor-based hand experiment for capturing movement and studying how finger actions can be represented as control data.",
      width: 474,
      height: 437,
       },
     {
      src: "/projects/robotic-hand/hand-motion-capture.jpeg",
      alt: "Computer display showing tracked hand joints and skeletal hand models",
      caption:
      "Digital hand-joint tracking used to visualise hand kinematics and prepare motion data for modelling and control.",
      width: 469,
     height: 460,
     },
    ],
    usefulnessEyebrow: "Potential value",
    usefulnessTitle: "Why an intelligent robotic hand could be useful",
    usefulnessDescription:
      "Traditional grippers are excellent when an object and task are predictable. A sensor-rich adaptive hand may create value where products, positions or handling requirements change.",
    usefulness: [
      "Flexible handling of objects with different shapes and sizes",
      "Force-aware grasping for fragile or deformable items",
      "Packaging, sorting, assembly and logistics automation",
      "Research and education in robotics, control and machine learning",
      "A reusable end-effector platform for automation integrators",
      "Future assistive-technology research, subject to safety, clinical and regulatory validation",
    ],
    architectureEyebrow: "Technology stack",
    architectureTitle: "Hardware and software working as one control system",
    architectureDescription:
      "The architecture separates high-level perception and planning from time-critical local motor control. This allows advanced AI processing without sacrificing deterministic response and safety.",
    hardwareTitle: "Hardware",
    hardware: [
      {
        title: "NVIDIA Jetson edge computer",
        description:
          "Runs computer vision, neural-network inference, grasp planning and high-level ROS 2 coordination.",
      },
      {
        title: "ARM real-time controller",
        description:
          "An STM32H7, Teensy-class or equivalent controller executes deterministic motor loops, sensor acquisition and local safety logic.",
      },
      {
        title: "Actuators and motor drivers",
        description:
          "The complete concept may support up to 20 actuator modules, with each joint requiring suitable drive electronics and current protection.",
      },
      {
        title: "Position and force sensing",
        description:
          "Encoders, Hall sensors or potentiometers provide position feedback, while current, pressure, force or tactile sensors support controlled contact.",
      },
      {
        title: "External analogue acquisition",
        description:
          "ADC hardware such as ADS1115, ADS1015 or MCP3008 can acquire analogue force, flex and pressure signals.",
      },
      {
        title: "Industrial communication and safety",
        description:
          "EtherCAT or another validated deterministic link transfers commands and feedback, supported by watchdogs, limits and emergency-stop behaviour.",
      },
    ],
    softwareTitle: "Software",
    software: [
      {
        title: "Linux, CUDA and TensorRT",
        description:
          "The Jetson software stack accelerates computer vision and neural-network inference at the edge.",
      },
      {
        title: "Python, C++ and OpenCV",
        description:
          "Used for image processing, perception, data preparation, testing and application-level control.",
      },
      {
        title: "PyTorch and model optimisation",
        description:
          "Supports training or integrating perception and learning models, followed by optimisation for edge deployment.",
      },
      {
        title: "ROS 2",
        description:
          "Provides modular nodes for vision, grasp planning, hand control, telemetry, logging and system integration.",
      },
      {
        title: "FreeRTOS or bare-metal firmware",
        description:
          "Runs local motor-control tasks, sensor sampling, fault handling and watchdog logic on the ARM controller.",
      },
      {
        title: "PID and adaptive control",
        description:
          "Independent high-frequency control loops regulate joint position, velocity or force, with future scope for learning-based adaptation.",
      },
    ],
    workflowEyebrow: "Control workflow",
    workflowTitle: "How the system is intended to operate",
    workflowDescription:
      "A grasp command becomes a coordinated sequence of perception, planning, deterministic control and sensor feedback.",
    workflow: [
      {
        title: "Observe",
        description:
          "Cameras and sensors capture the object, hand state and operating environment.",
      },
      {
        title: "Interpret",
        description:
          "The Jetson estimates object pose, relevant features and an appropriate grasp type.",
      },
      {
        title: "Plan",
        description:
          "A high-level controller generates target joint positions, forces or hand synergies.",
      },
      {
        title: "Control",
        description:
          "The ARM controller executes motor commands at a deterministic rate and enforces limits.",
      },
      {
        title: "Adapt",
        description:
          "Position, current, force and tactile feedback refine the grasp or trigger a safe stop.",
      },
    ],
    evaluationEyebrow: "Validation",
    evaluationTitle: "How the prototype should be evaluated",
    evaluationDescription:
      "Success should be demonstrated with measurable engineering evidence rather than attractive demonstrations alone, because robots have suffered enough from marketing departments.",
    metrics: [
      "Grasp success rate across a defined object test set",
      "Position and force-control error",
      "Maximum contact force on fragile objects",
      "Response latency and complete grasp cycle time",
      "Communication timing, jitter and packet-loss behaviour",
      "Fault detection and recovery performance",
      "Repeatability across repeated trials",
      "Energy consumption, payload and actuator temperature",
    ],
    roadmapEyebrow: "Development roadmap",
    roadmapTitle: "A staged route from research to an industry pilot",
  },

  fa: {
    statusLabel: "وضعیت فعلی پروژه",
    statusDescription:
      "پروژه در مرحله پژوهش، طراحی معماری و توسعه مرحله‌ای نمونه اولیه است. تصاویر زیر مربوط به آزمایش‌های اولیه حسگری و ثبت حرکت هستند و محصول نهایی دست رباتیک را نشان نمی‌دهند.",
    overviewTitle: "معرفی پروژه",
    overviewParagraphs: [
      "دست رباتیک هوشمند یک پلتفرم ماژولار برای دست‌کاری اجسام است که طراحی مکانیکی، حسگرها، کنترل قطعی موتور، بینایی ماشین و هوش مصنوعی لبه را ترکیب می‌کند.",
      "پرسش اصلی پژوهش این است که آیا دست می‌تواند بدون برنامه‌نویسی جداگانه تک‌تک حرکات انگشتان، گرفتن خود را با شکل، جهت، وزن و شکنندگی اجسام تطبیق دهد.",
      "توسعه با زیرسامانه‌های قابل اندازه‌گیری مانند ثبت حرکت دست انسان، مکانیزم انگشت اشاره و شست، حسگر نیرو و موقعیت و کنترل بلادرنگ موتور آغاز می‌شود.",
    ],
    galleryEyebrow: "شواهد توسعه",
    galleryTitle: "آزمایش‌های حسگری و ثبت حرکت دست",
    galleryDescription:
      "این تصاویر بخشی از کارهای اولیه برای شناخت حرکت دست انسان، ارتباط مفاصل و داده‌های حسگر را نشان می‌دهند.",
    galleryNote:
      "این تصاویر مستندات آزمایش‌های حسگری و موشن‌کپچر هستند و نباید به‌عنوان تصویر نمونه نهایی دست رباتیک معرفی شوند.",
  gallery: [
     {
       src: "/projects/robotic-hand/hand-sensor.jpeg",
       alt: "تجهیزات حسگری متصل به دست انسان در آزمایش ثبت حرکت",
            caption:
      "آزمایش حسگری دست برای ثبت حرکت و تبدیل رفتار انگشتان به داده قابل استفاده در کنترل.",
           width: 474,
      height: 437,
      },
     {
        src: "/projects/robotic-hand/hand-motion-capture.jpeg",
       alt: "نمایش مفاصل و اسکلت دیجیتال دست روی مانیتور",
            caption:
      "ردیابی دیجیتال مفاصل دست برای نمایش سینماتیک و آماده‌سازی داده حرکت.",
           width: 469,
      height: 460,
      },
     ],
    usefulnessEyebrow: "ارزش بالقوه",
    usefulnessTitle: "چرا دست رباتیک هوشمند می‌تواند مفید باشد",
    usefulnessDescription:
      "گریپرهای معمولی برای وظایف قابل پیش‌بینی بسیار مناسب‌اند؛ اما یک دست تطبیقی و حسگرمحور می‌تواند در محیط‌هایی که شکل و شرایط اجسام تغییر می‌کند ارزش ایجاد کند.",
    usefulness: [
      "جابجایی انعطاف‌پذیر اجسام با شکل و اندازه متفاوت",
      "گرفتن مبتنی بر نیرو برای اجسام ظریف یا تغییرشکل‌پذیر",
      "اتوماسیون بسته‌بندی، مرتب‌سازی، مونتاژ و لجستیک",
      "پژوهش و آموزش رباتیک، کنترل و یادگیری ماشین",
      "پلتفرم اندافکتور قابل استفاده برای یکپارچه‌سازان اتوماسیون",
      "پژوهش آینده در فناوری کمکی، مشروط به اعتبارسنجی ایمنی و مقرراتی",
    ],
    architectureEyebrow: "پشته فناوری",
    architectureTitle: "یکپارچگی سخت‌افزار و نرم‌افزار در یک سامانه کنترل",
    architectureDescription:
      "معماری، ادراک و برنامه‌ریزی سطح بالا را از کنترل بلادرنگ موتور جدا می‌کند تا پردازش هوشمند بدون از دست دادن پاسخ قطعی و ایمنی انجام شود.",
    hardwareTitle: "سخت‌افزار",
    hardware: [
      {
        title: "رایانه لبه NVIDIA Jetson",
        description:
          "اجرای بینایی ماشین، استنتاج شبکه عصبی، برنامه‌ریزی گرفتن و هماهنگی ROS 2.",
      },
      {
        title: "کنترل‌گر بلادرنگ ARM",
        description:
          "کنترل‌گری مانند STM32H7 یا گزینه هم‌سطح، حلقه موتور، حسگرها و منطق ایمنی محلی را اجرا می‌کند.",
      },
      {
        title: "محرک‌ها و درایورهای موتور",
        description:
          "طرح کامل می‌تواند تا ۲۰ ماژول محرک را پشتیبانی کند و هر مفصل به درایو مناسب و حفاظت جریان نیاز دارد.",
      },
      {
        title: "حسگر موقعیت و نیرو",
        description:
          "انکودر، حسگر Hall یا پتانسیومتر برای موقعیت و حسگر جریان، فشار، نیرو یا لامسه برای تماس کنترل‌شده.",
      },
      {
        title: "دریافت سیگنال آنالوگ",
        description:
          "مبدل‌هایی مانند ADS1115، ADS1015 یا MCP3008 برای دریافت داده نیرو، خمش و فشار.",
      },
      {
        title: "ارتباط صنعتی و ایمنی",
        description:
          "EtherCAT یا یک ارتباط قطعی اعتبارسنجی‌شده به همراه watchdog، محدودیت‌ها و توقف اضطراری.",
      },
    ],
    softwareTitle: "نرم‌افزار",
    software: [
      {
        title: "Linux، CUDA و TensorRT",
        description:
          "شتاب‌دهی بینایی ماشین و استنتاج شبکه عصبی روی Jetson.",
      },
      {
        title: "Python، C++ و OpenCV",
        description:
          "پردازش تصویر، ادراک، آماده‌سازی داده، آزمون و کنترل سطح کاربرد.",
      },
      {
        title: "PyTorch و بهینه‌سازی مدل",
        description:
          "آموزش یا یکپارچه‌سازی مدل‌های ادراک و آماده‌سازی آن‌ها برای اجرا روی سخت‌افزار لبه.",
      },
      {
        title: "ROS 2",
        description:
          "گره‌های ماژولار برای بینایی، برنامه‌ریزی گرفتن، کنترل، ثبت داده و یکپارچه‌سازی.",
      },
      {
        title: "FreeRTOS یا firmware بدون سیستم‌عامل",
        description:
          "اجرای وظایف کنترل موتور، نمونه‌برداری حسگر، خطا و watchdog روی ARM.",
      },
      {
        title: "کنترل PID و کنترل تطبیقی",
        description:
          "حلقه‌های سریع برای کنترل موقعیت، سرعت یا نیرو و توسعه آینده کنترل یادگیری‌محور.",
      },
    ],
    workflowEyebrow: "فرایند کنترل",
    workflowTitle: "نحوه عملکرد مورد انتظار سامانه",
    workflowDescription:
      "فرمان گرفتن از مسیر ادراک، برنامه‌ریزی، کنترل قطعی و بازخورد حسگر به حرکت تبدیل می‌شود.",
    workflow: [
      {
        title: "مشاهده",
        description:
          "دوربین‌ها و حسگرها اطلاعات جسم، وضعیت دست و محیط را دریافت می‌کنند.",
      },
      {
        title: "تفسیر",
        description:
          "Jetson وضعیت جسم و نوع مناسب گرفتن را برآورد می‌کند.",
      },
      {
        title: "برنامه‌ریزی",
        description:
          "اهداف موقعیت، نیرو یا الگوی هماهنگ حرکت انگشتان تولید می‌شود.",
      },
      {
        title: "کنترل",
        description:
          "کنترل‌گر ARM فرمان موتور را با نرخ قطعی اجرا و محدودیت‌ها را اعمال می‌کند.",
      },
      {
        title: "تطبیق",
        description:
          "بازخورد موقعیت، جریان، نیرو و لامسه گرفتن را اصلاح یا سامانه را متوقف می‌کند.",
      },
    ],
    evaluationEyebrow: "اعتبارسنجی",
    evaluationTitle: "روش ارزیابی نمونه اولیه",
    evaluationDescription:
      "موفقیت پروژه باید با شواهد مهندسی قابل اندازه‌گیری نشان داده شود، نه فقط یک نمایش جذاب.",
    metrics: [
      "نرخ موفقیت گرفتن در مجموعه مشخصی از اجسام",
      "خطای کنترل موقعیت و نیرو",
      "حداکثر نیروی تماس با اجسام ظریف",
      "زمان پاسخ و زمان کامل چرخه گرفتن",
      "زمان‌بندی ارتباط، jitter و از دست رفتن بسته",
      "عملکرد تشخیص خطا و بازیابی",
      "تکرارپذیری در آزمون‌های متوالی",
      "مصرف انرژی، بار قابل حمل و دمای محرک",
    ],
    roadmapEyebrow: "نقشه راه توسعه",
    roadmapTitle: "مسیر مرحله‌ای از پژوهش تا پایلوت صنعتی",
  },

  zh: {
    statusLabel: "当前项目状态",
    statusDescription:
      "项目目前处于研究、系统架构和分阶段原型开发阶段。下方照片展示早期传感和动作捕捉实验，并不是最终机器人手产品。",
    overviewTitle: "项目简介",
    overviewParagraphs: [
      "智能机器人手是一个模块化操作平台，结合机械设计、传感、确定性电机控制、计算机视觉和边缘人工智能。",
      "核心研究问题是：在无需逐个编程手指动作的情况下，机器人手能否根据物体的形状、方向、重量和脆弱程度调整抓取方式。",
      "开发从可测量的子系统开始，包括人手动作捕捉、食指和拇指机构、力与位置传感以及实时电机控制。",
    ],
    galleryEyebrow: "开发证据",
    galleryTitle: "手部传感与动作捕捉实验",
    galleryDescription:
      "这些图像展示用于理解人手动作、关节关系和传感器输入的早期实验工作。",
    galleryNote:
      "这些图像记录传感与动作捕捉实验，不应被描述为最终机器人手原型的照片。",
    gallery: [
       {
       src: "/projects/robotic-hand/hand-sensor.jpeg",
       alt: "动作捕捉实验中安装在人手上的传感设备",
       caption:
      "用于记录手部动作并研究如何将手指行为转换为控制数据的传感实验。",
       width: 474,
       height: 437,
       },
      {
       src: "/projects/robotic-hand/hand-motion-capture.jpeg",
       alt: "显示手部关节与骨架模型的计算机画面",
       caption:
      "用于显示手部运动学并为建模和控制准备动作数据的数字关节跟踪。",
       width: 469,
       height: 460,
        },
      ],
    usefulnessEyebrow: "潜在价值",
    usefulnessTitle: "智能机器人手的用途",
    usefulnessDescription:
      "传统夹具适合可预测任务，而传感丰富的自适应机器人手可在物体和操作条件变化时提供更多灵活性。",
    usefulness: [
      "处理不同形状和尺寸的物体",
      "对易碎或可变形物体进行力感知抓取",
      "包装、分拣、装配和物流自动化",
      "机器人、控制与机器学习研究和教育",
      "面向自动化集成商的可复用末端执行器平台",
      "未来辅助技术研究，但必须完成安全和监管验证",
    ],
    architectureEyebrow: "技术栈",
    architectureTitle: "硬件与软件组成统一控制系统",
    architectureDescription:
      "架构将高层感知与规划和时间关键的本地电机控制分离，以兼顾人工智能处理、确定性响应和安全。",
    hardwareTitle: "硬件",
    hardware: [
      {
        title: "NVIDIA Jetson 边缘计算机",
        description:
          "运行计算机视觉、神经网络推理、抓取规划和 ROS 2 高层协调。",
      },
      {
        title: "ARM 实时控制器",
        description:
          "STM32H7、Teensy 或同等级控制器执行电机环、传感采集和本地安全逻辑。",
      },
      {
        title: "执行器与电机驱动器",
        description:
          "完整概念可支持最多 20 个执行器模块，每个关节都需要合适的驱动电子设备和电流保护。",
      },
      {
        title: "位置与力传感",
        description:
          "编码器、Hall 传感器或电位器提供位置反馈，电流、压力、力或触觉传感器支持接触控制。",
      },
      {
        title: "外部模拟采集",
        description:
          "ADS1115、ADS1015 或 MCP3008 等 ADC 可采集力、弯曲和压力信号。",
      },
      {
        title: "工业通信与安全",
        description:
          "EtherCAT 或其他确定性通信配合看门狗、限制和紧急停止行为。",
      },
    ],
    softwareTitle: "软件",
    software: [
      {
        title: "Linux、CUDA 与 TensorRT",
        description:
          "在 Jetson 上加速计算机视觉和神经网络推理。",
      },
      {
        title: "Python、C++ 与 OpenCV",
        description:
          "用于图像处理、感知、数据准备、测试和应用层控制。",
      },
      {
        title: "PyTorch 与模型优化",
        description:
          "支持感知模型训练或集成，并优化用于边缘部署。",
      },
      {
        title: "ROS 2",
        description:
          "提供视觉、抓取规划、手部控制、遥测、日志和系统集成节点。",
      },
      {
        title: "FreeRTOS 或裸机固件",
        description:
          "在 ARM 控制器上运行电机控制、传感采样、故障处理和看门狗。",
      },
      {
        title: "PID 与自适应控制",
        description:
          "高频控制环调节位置、速度或力，并为学习型适应保留扩展空间。",
      },
    ],
    workflowEyebrow: "控制流程",
    workflowTitle: "系统预期如何工作",
    workflowDescription:
      "抓取命令通过感知、规划、确定性控制和传感反馈转换为协调动作。",
    workflow: [
      {
        title: "观察",
        description:
          "摄像头与传感器获取物体、手部状态和环境信息。",
      },
      {
        title: "理解",
        description:
          "Jetson 估计物体姿态、关键特征和适合的抓取方式。",
      },
      {
        title: "规划",
        description:
          "高层控制器生成目标关节位置、力或手部协同动作。",
      },
      {
        title: "控制",
        description:
          "ARM 控制器以确定性频率执行电机命令并实施限制。",
      },
      {
        title: "适应",
        description:
          "位置、电流、力和触觉反馈调整抓取或触发安全停止。",
      },
    ],
    evaluationEyebrow: "验证",
    evaluationTitle: "如何评估原型",
    evaluationDescription:
      "项目成功应通过可测量的工程证据证明，而不仅仅是好看的演示。",
    metrics: [
      "在定义物体测试集上的抓取成功率",
      "位置与力控制误差",
      "易碎物体的最大接触力",
      "响应延迟与完整抓取周期时间",
      "通信时序、抖动与丢包",
      "故障检测与恢复表现",
      "重复试验的一致性",
      "能耗、负载与执行器温度",
    ],
    roadmapEyebrow: "开发路线图",
    roadmapTitle: "从研究到行业试点的分阶段路径",
  },
  pa: {
    statusLabel: "ਮੌਜੂਦਾ ਪ੍ਰੋਜੈਕਟ ਸਥਿਤੀ",
    statusDescription:
      "ਪ੍ਰੋਜੈਕਟ ਇਸ ਵੇਲੇ ਖੋਜ, ਆਰਕੀਟੈਕਚਰ ਅਤੇ ਪੜਾਅਵਾਰ ਪ੍ਰੋਟੋਟਾਈਪ ਵਿਕਾਸ ਵਿੱਚ ਹੈ। ਹੇਠਾਂ ਦਿੱਤੀਆਂ ਤਸਵੀਰਾਂ ਸ਼ੁਰੂਆਤੀ sensing ਅਤੇ motion-capture ਪ੍ਰਯੋਗ ਦਿਖਾਉਂਦੀਆਂ ਹਨ, ਅੰਤਿਮ robotic-hand ਉਤਪਾਦ ਨਹੀਂ।",
    overviewTitle: "ਪ੍ਰੋਜੈਕਟ ਕੀ ਹੈ",
    overviewParagraphs: [
      "Intelligent Robotic Hand ਇੱਕ ਮੋਡਿਊਲਰ robotic manipulation platform ਹੈ ਜੋ ਮਕੈਨਿਕਲ ਡਿਜ਼ਾਈਨ, sensing, deterministic motor control, computer vision ਅਤੇ edge AI ਨੂੰ ਜੋੜਨ ਲਈ ਤਿਆਰ ਕੀਤਾ ਗਿਆ ਹੈ।",
      "ਮੁੱਖ ਖੋਜ ਸਵਾਲ ਇਹ ਹੈ ਕਿ ਕੀ ਹੱਥ ਵੱਖ-ਵੱਖ ਆਕਾਰ, ਦਿਸ਼ਾ, ਭਾਰ ਅਤੇ ਨਾਜ਼ੁਕੀ ਵਾਲੀਆਂ ਵਸਤੂਆਂ ਲਈ ਆਪਣੀ grasp ਨੂੰ ਬਿਨਾਂ ਹਰ ਉਂਗਲੀ ਦੀ ਹਿਲਚਲ ਵੱਖਰੇ ਤੌਰ 'ਤੇ program ਕੀਤੇ ਅਨੁਕੂਲ ਕਰ ਸਕਦਾ ਹੈ।",
      "ਵਿਕਾਸ ਮਾਪਯੋਗ sub-systems ਨਾਲ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ, ਜਿਵੇਂ human-hand motion capture, index-finger ਅਤੇ thumb mechanism, force ਅਤੇ position sensing, ਅਤੇ real-time motor control। ਇਹ ਨਤੀਜੇ ਪੂਰੇ multi-finger prototype ਦੇ ਡਿਜ਼ਾਈਨ ਨੂੰ ਜਾਣਕਾਰੀ ਦੇਣਗੇ।",
    ],
    galleryEyebrow: "ਵਿਕਾਸ ਦੇ ਸਬੂਤ",
    galleryTitle: "ਹੱਥ sensing ਅਤੇ motion-capture ਪ੍ਰਯੋਗ",
    galleryDescription:
      "ਇਹ ਤਸਵੀਰਾਂ ਮਨੁੱਖੀ ਹੱਥ ਦੀ ਹਿਲਚਲ, joint relationships ਅਤੇ sensor input ਨੂੰ ਸਮਝਣ ਲਈ ਕੀਤੇ ਸ਼ੁਰੂਆਤੀ ਕੰਮ ਨੂੰ ਦਿਖਾਉਂਦੀਆਂ ਹਨ, ਇਸ ਤੋਂ ਪਹਿਲਾਂ ਕਿ ਇਹ ਵਿਹਾਰ robotic mechanism ਵਿੱਚ ਤਬਦੀਲ ਕੀਤੇ ਜਾਣ।",
    galleryNote:
      "ਇਹ ਤਸਵੀਰਾਂ experimental sensing ਅਤੇ motion-capture ਕੰਮ ਦਾ ਦਸਤਾਵੇਜ਼ ਹਨ। ਇਨ੍ਹਾਂ ਨੂੰ ਅੰਤਿਮ robotic-hand prototype ਦੀਆਂ ਤਸਵੀਰਾਂ ਵਜੋਂ ਪੇਸ਼ ਨਹੀਂ ਕਰਨਾ ਚਾਹੀਦਾ।",
    gallery: [
      {
        src: "/projects/robotic-hand/hand-sensor.jpeg",
        alt: "motion-capture ਪ੍ਰਯੋਗ ਦੌਰਾਨ ਮਨੁੱਖੀ ਹੱਥ ਨਾਲ ਜੁੜਿਆ sensor equipment",
        caption:
          "ਹੱਥ ਦੀ ਹਿਲਚਲ capture ਕਰਨ ਅਤੇ finger actions ਨੂੰ control data ਵਜੋਂ ਦਰਸਾਉਣ ਲਈ sensor-based ਪ੍ਰਯੋਗ।",
        width: 474,
        height: 437,
      },
      {
        src: "/projects/robotic-hand/hand-motion-capture.jpeg",
        alt: "tracked hand joints ਅਤੇ skeletal hand models ਦਿਖਾਉਂਦੀ computer display",
        caption:
          "hand kinematics ਨੂੰ visualise ਕਰਨ ਅਤੇ modelling/control ਲਈ motion data ਤਿਆਰ ਕਰਨ ਵਾਸਤੇ digital joint tracking।",
        width: 469,
        height: 460,
      },
    ],
    usefulnessEyebrow: "ਸੰਭਾਵੀ ਮੁੱਲ",
    usefulnessTitle: "ਇੰਟੈਲੀਜੈਂਟ robotic hand ਕਿਉਂ ਲਾਭਦਾਇਕ ਹੋ ਸਕਦਾ ਹੈ",
    usefulnessDescription:
      "ਰਵਾਇਤੀ grippers ਅਨੁਮਾਨਯੋਗ ਵਸਤੂ ਅਤੇ ਕੰਮ ਲਈ ਬਹੁਤ ਵਧੀਆ ਹਨ। Sensor-rich adaptive hand ਉਹਥੇ ਮੁੱਲ ਪੈਦਾ ਕਰ ਸਕਦਾ ਹੈ ਜਿੱਥੇ products, positions ਜਾਂ handling requirements ਬਦਲਦੇ ਹਨ।",
    usefulness: [
      "ਵੱਖ-ਵੱਖ ਆਕਾਰ ਅਤੇ ਮਾਪ ਵਾਲੀਆਂ ਵਸਤੂਆਂ ਦੀ ਲਚਕੀਲੀ handling",
      "ਨਾਜ਼ੁਕ ਜਾਂ deformable items ਲਈ force-aware grasping",
      "packaging, sorting, assembly ਅਤੇ logistics automation",
      "robotics, control ਅਤੇ machine learning ਵਿੱਚ ਖੋਜ ਅਤੇ ਸਿੱਖਿਆ",
      "automation integrators ਲਈ reusable end-effector platform",
      "ਭਵਿੱਖੀ assistive-technology ਖੋਜ, safety, clinical ਅਤੇ regulatory validation ਦੇ ਅਧੀਨ",
    ],
    architectureEyebrow: "ਤਕਨਾਲੋਜੀ ਸਟੈਕ",
    architectureTitle: "ਇੱਕ control system ਵਜੋਂ ਇਕੱਠੇ ਕੰਮ ਕਰਦਾ hardware ਅਤੇ software",
    architectureDescription:
      "ਆਰਕੀਟੈਕਚਰ high-level perception ਅਤੇ planning ਨੂੰ time-critical local motor control ਤੋਂ ਵੱਖ ਕਰਦਾ ਹੈ। ਇਸ ਨਾਲ deterministic response ਅਤੇ safety ਨੂੰ ਕਾਇਮ ਰੱਖਦੇ ਹੋਏ advanced AI processing ਸੰਭਵ ਹੁੰਦੀ ਹੈ।",
    hardwareTitle: "ਹਾਰਡਵੇਅਰ",
    hardware: [
      {
        title: "NVIDIA Jetson edge computer",
        description:
          "computer vision, neural-network inference, grasp planning ਅਤੇ high-level ROS 2 coordination ਚਲਾਉਂਦਾ ਹੈ।",
      },
      {
        title: "ARM real-time controller",
        description:
          "STM32H7, Teensy-class ਜਾਂ ਸਮਾਨ controller deterministic motor loops, sensor acquisition ਅਤੇ local safety logic ਚਲਾਉਂਦਾ ਹੈ।",
      },
      {
        title: "Actuators ਅਤੇ motor drivers",
        description:
          "ਪੂਰਾ ਸੰਕਲਪ 20 ਤੱਕ actuator modules ਨੂੰ support ਕਰ ਸਕਦਾ ਹੈ, ਅਤੇ ਹਰ joint ਲਈ ਢੁੱਕਵੇਂ drive electronics ਅਤੇ current protection ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ।",
      },
      {
        title: "Position ਅਤੇ force sensing",
        description:
          "Encoders, Hall sensors ਜਾਂ potentiometers position feedback ਦਿੰਦੇ ਹਨ, ਜਦਕਿ current, pressure, force ਜਾਂ tactile sensors controlled contact ਨੂੰ ਸਹਾਇਤਾ ਦਿੰਦੇ ਹਨ।",
      },
      {
        title: "External analogue acquisition",
        description:
          "ADS1115, ADS1015 ਜਾਂ MCP3008 ਵਰਗਾ ADC hardware analogue force, flex ਅਤੇ pressure signals acquire ਕਰ ਸਕਦਾ ਹੈ।",
      },
      {
        title: "Industrial communication ਅਤੇ safety",
        description:
          "EtherCAT ਜਾਂ ਹੋਰ validated deterministic link commands ਅਤੇ feedback transfer ਕਰਦਾ ਹੈ, watchdogs, limits ਅਤੇ emergency-stop behaviour ਦੇ ਨਾਲ।",
      },
    ],
    softwareTitle: "ਸਾਫਟਵੇਅਰ",
    software: [
      {
        title: "Linux, CUDA ਅਤੇ TensorRT",
        description:
          "Jetson software stack edge 'ਤੇ computer vision ਅਤੇ neural-network inference ਨੂੰ accelerate ਕਰਦਾ ਹੈ।",
      },
      {
        title: "Python, C++ ਅਤੇ OpenCV",
        description:
          "image processing, perception, data preparation, testing ਅਤੇ application-level control ਲਈ ਵਰਤੇ ਜਾਂਦੇ ਹਨ।",
      },
      {
        title: "PyTorch ਅਤੇ model optimisation",
        description:
          "perception ਅਤੇ learning models ਨੂੰ train ਜਾਂ integrate ਕਰਨ ਅਤੇ edge deployment ਲਈ optimise ਕਰਨ ਨੂੰ ਸਹਾਇਤਾ ਦਿੰਦਾ ਹੈ।",
      },
      {
        title: "ROS 2",
        description:
          "vision, grasp planning, hand control, telemetry, logging ਅਤੇ system integration ਲਈ modular nodes ਦਿੰਦਾ ਹੈ।",
      },
      {
        title: "FreeRTOS ਜਾਂ bare-metal firmware",
        description:
          "ARM controller 'ਤੇ local motor-control tasks, sensor sampling, fault handling ਅਤੇ watchdog logic ਚਲਾਉਂਦਾ ਹੈ।",
      },
      {
        title: "PID ਅਤੇ adaptive control",
        description:
          "ਸਵਤੰਤਰ high-frequency control loops joint position, velocity ਜਾਂ force ਨੂੰ regulate ਕਰਦੇ ਹਨ, ਭਵਿੱਖ ਵਿੱਚ learning-based adaptation ਦੀ ਸੰਭਾਵਨਾ ਨਾਲ।",
      },
    ],
    workflowEyebrow: "ਕੰਟਰੋਲ ਵਰਕਫ਼ਲੋ",
    workflowTitle: "ਸਿਸਟਮ ਕਿਵੇਂ ਕੰਮ ਕਰਨ ਲਈ ਤਿਆਰ ਕੀਤਾ ਗਿਆ ਹੈ",
    workflowDescription:
      "ਇੱਕ grasp command perception, planning, deterministic control ਅਤੇ sensor feedback ਦੀ coordinated sequence ਵਿੱਚ ਬਦਲਦਾ ਹੈ।",
    workflow: [
      {
        title: "ਦੇਖਣਾ",
        description:
          "Cameras ਅਤੇ sensors object, hand state ਅਤੇ operating environment capture ਕਰਦੇ ਹਨ।",
      },
      {
        title: "ਸਮਝਣਾ",
        description:
          "Jetson object pose, relevant features ਅਤੇ ਢੁੱਕਵੇਂ grasp type ਦਾ ਅੰਦਾਜ਼ਾ ਲਗਾਉਂਦਾ ਹੈ।",
      },
      {
        title: "ਯੋਜਨਾ",
        description:
          "High-level controller target joint positions, forces ਜਾਂ hand synergies ਤਿਆਰ ਕਰਦਾ ਹੈ।",
      },
      {
        title: "ਕੰਟਰੋਲ",
        description:
          "ARM controller deterministic rate 'ਤੇ motor commands ਚਲਾਉਂਦਾ ਅਤੇ limits enforce ਕਰਦਾ ਹੈ।",
      },
      {
        title: "ਅਨੁਕੂਲਤਾ",
        description:
          "Position, current, force ਅਤੇ tactile feedback grasp ਨੂੰ refine ਕਰਦੇ ਹਨ ਜਾਂ safe stop trigger ਕਰਦੇ ਹਨ।",
      },
    ],
    evaluationEyebrow: "ਪ੍ਰਮਾਣਿਕਤਾ",
    evaluationTitle: "ਪ੍ਰੋਟੋਟਾਈਪ ਦਾ ਮੁਲਾਂਕਣ ਕਿਵੇਂ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ",
    evaluationDescription:
      "ਸਫਲਤਾ ਨੂੰ ਸਿਰਫ਼ ਦਿਖਾਵਟੀ demo ਦੀ ਬਜਾਏ ਮਾਪਯੋਗ engineering evidence ਨਾਲ ਸਾਬਤ ਕੀਤਾ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ।",
    metrics: [
      "ਪਰਿਭਾਸ਼ਿਤ object test set 'ਤੇ grasp success rate",
      "Position ਅਤੇ force-control error",
      "ਨਾਜ਼ੁਕ objects 'ਤੇ maximum contact force",
      "Response latency ਅਤੇ ਪੂਰਾ grasp cycle time",
      "Communication timing, jitter ਅਤੇ packet-loss behaviour",
      "Fault detection ਅਤੇ recovery performance",
      "ਦੁਹਰਾਏ trials ਵਿੱਚ repeatability",
      "Energy consumption, payload ਅਤੇ actuator temperature",
    ],
    roadmapEyebrow: "ਵਿਕਾਸ ਰੋਡਮੈਪ",
    roadmapTitle: "ਖੋਜ ਤੋਂ industry pilot ਤੱਕ ਪੜਾਅਵਾਰ ਰਸਤਾ",
  },

};

