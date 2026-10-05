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
          "The complete concept may use approximately fifteen actuators, with each joint requiring suitable drive electronics and current protection.",
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
    statusLabel: "ÙˆØ¶Ø¹ÛŒØª ÙØ¹Ù„ÛŒ Ù¾Ø±ÙˆÚ˜Ù‡",
    statusDescription:
      "Ù¾Ø±ÙˆÚ˜Ù‡ Ø¯Ø± Ù…Ø±Ø­Ù„Ù‡ Ù¾Ú˜ÙˆÙ‡Ø´ØŒ Ø·Ø±Ø§Ø­ÛŒ Ù…Ø¹Ù…Ø§Ø±ÛŒ Ùˆ ØªÙˆØ³Ø¹Ù‡ Ù…Ø±Ø­Ù„Ù‡â€ŒØ§ÛŒ Ù†Ù…ÙˆÙ†Ù‡ Ø§ÙˆÙ„ÛŒÙ‡ Ø§Ø³Øª. ØªØµØ§ÙˆÛŒØ± Ø²ÛŒØ± Ù…Ø±Ø¨ÙˆØ· Ø¨Ù‡ Ø¢Ø²Ù…Ø§ÛŒØ´â€ŒÙ‡Ø§ÛŒ Ø§ÙˆÙ„ÛŒÙ‡ Ø­Ø³Ú¯Ø±ÛŒ Ùˆ Ø«Ø¨Øª Ø­Ø±Ú©Øª Ù‡Ø³ØªÙ†Ø¯ Ùˆ Ù…Ø­ØµÙˆÙ„ Ù†Ù‡Ø§ÛŒÛŒ Ø¯Ø³Øª Ø±Ø¨Ø§ØªÛŒÚ© Ø±Ø§ Ù†Ø´Ø§Ù† Ù†Ù…ÛŒâ€ŒØ¯Ù‡Ù†Ø¯.",
    overviewTitle: "Ù…Ø¹Ø±ÙÛŒ Ù¾Ø±ÙˆÚ˜Ù‡",
    overviewParagraphs: [
      "Ø¯Ø³Øª Ø±Ø¨Ø§ØªÛŒÚ© Ù‡ÙˆØ´Ù…Ù†Ø¯ ÛŒÚ© Ù¾Ù„ØªÙØ±Ù… Ù…Ø§Ú˜ÙˆÙ„Ø§Ø± Ø¨Ø±Ø§ÛŒ Ø¯Ø³Øªâ€ŒÚ©Ø§Ø±ÛŒ Ø§Ø¬Ø³Ø§Ù… Ø§Ø³Øª Ú©Ù‡ Ø·Ø±Ø§Ø­ÛŒ Ù…Ú©Ø§Ù†ÛŒÚ©ÛŒØŒ Ø­Ø³Ú¯Ø±Ù‡Ø§ØŒ Ú©Ù†ØªØ±Ù„ Ù‚Ø·Ø¹ÛŒ Ù…ÙˆØªÙˆØ±ØŒ Ø¨ÛŒÙ†Ø§ÛŒÛŒ Ù…Ø§Ø´ÛŒÙ† Ùˆ Ù‡ÙˆØ´ Ù…ØµÙ†ÙˆØ¹ÛŒ Ù„Ø¨Ù‡ Ø±Ø§ ØªØ±Ú©ÛŒØ¨ Ù…ÛŒâ€ŒÚ©Ù†Ø¯.",
      "Ù¾Ø±Ø³Ø´ Ø§ØµÙ„ÛŒ Ù¾Ú˜ÙˆÙ‡Ø´ Ø§ÛŒÙ† Ø§Ø³Øª Ú©Ù‡ Ø¢ÛŒØ§ Ø¯Ø³Øª Ù…ÛŒâ€ŒØªÙˆØ§Ù†Ø¯ Ø¨Ø¯ÙˆÙ† Ø¨Ø±Ù†Ø§Ù…Ù‡â€ŒÙ†ÙˆÛŒØ³ÛŒ Ø¬Ø¯Ø§Ú¯Ø§Ù†Ù‡ ØªÚ©â€ŒØªÚ© Ø­Ø±Ú©Ø§Øª Ø§Ù†Ú¯Ø´ØªØ§Ù†ØŒ Ú¯Ø±ÙØªÙ† Ø®ÙˆØ¯ Ø±Ø§ Ø¨Ø§ Ø´Ú©Ù„ØŒ Ø¬Ù‡ØªØŒ ÙˆØ²Ù† Ùˆ Ø´Ú©Ù†Ù†Ø¯Ú¯ÛŒ Ø§Ø¬Ø³Ø§Ù… ØªØ·Ø¨ÛŒÙ‚ Ø¯Ù‡Ø¯.",
      "ØªÙˆØ³Ø¹Ù‡ Ø¨Ø§ Ø²ÛŒØ±Ø³Ø§Ù…Ø§Ù†Ù‡â€ŒÙ‡Ø§ÛŒ Ù‚Ø§Ø¨Ù„ Ø§Ù†Ø¯Ø§Ø²Ù‡â€ŒÚ¯ÛŒØ±ÛŒ Ù…Ø§Ù†Ù†Ø¯ Ø«Ø¨Øª Ø­Ø±Ú©Øª Ø¯Ø³Øª Ø§Ù†Ø³Ø§Ù†ØŒ Ù…Ú©Ø§Ù†ÛŒØ²Ù… Ø§Ù†Ú¯Ø´Øª Ø§Ø´Ø§Ø±Ù‡ Ùˆ Ø´Ø³ØªØŒ Ø­Ø³Ú¯Ø± Ù†ÛŒØ±Ùˆ Ùˆ Ù…ÙˆÙ‚Ø¹ÛŒØª Ùˆ Ú©Ù†ØªØ±Ù„ Ø¨Ù„Ø§Ø¯Ø±Ù†Ú¯ Ù…ÙˆØªÙˆØ± Ø¢ØºØ§Ø² Ù…ÛŒâ€ŒØ´ÙˆØ¯.",
    ],
    galleryEyebrow: "Ø´ÙˆØ§Ù‡Ø¯ ØªÙˆØ³Ø¹Ù‡",
    galleryTitle: "Ø¢Ø²Ù…Ø§ÛŒØ´â€ŒÙ‡Ø§ÛŒ Ø­Ø³Ú¯Ø±ÛŒ Ùˆ Ø«Ø¨Øª Ø­Ø±Ú©Øª Ø¯Ø³Øª",
    galleryDescription:
      "Ø§ÛŒÙ† ØªØµØ§ÙˆÛŒØ± Ø¨Ø®Ø´ÛŒ Ø§Ø² Ú©Ø§Ø±Ù‡Ø§ÛŒ Ø§ÙˆÙ„ÛŒÙ‡ Ø¨Ø±Ø§ÛŒ Ø´Ù†Ø§Ø®Øª Ø­Ø±Ú©Øª Ø¯Ø³Øª Ø§Ù†Ø³Ø§Ù†ØŒ Ø§Ø±ØªØ¨Ø§Ø· Ù…ÙØ§ØµÙ„ Ùˆ Ø¯Ø§Ø¯Ù‡â€ŒÙ‡Ø§ÛŒ Ø­Ø³Ú¯Ø± Ø±Ø§ Ù†Ø´Ø§Ù† Ù…ÛŒâ€ŒØ¯Ù‡Ù†Ø¯.",
    galleryNote:
      "Ø§ÛŒÙ† ØªØµØ§ÙˆÛŒØ± Ù…Ø³ØªÙ†Ø¯Ø§Øª Ø¢Ø²Ù…Ø§ÛŒØ´â€ŒÙ‡Ø§ÛŒ Ø­Ø³Ú¯Ø±ÛŒ Ùˆ Ù…ÙˆØ´Ù†â€ŒÚ©Ù¾Ú†Ø± Ù‡Ø³ØªÙ†Ø¯ Ùˆ Ù†Ø¨Ø§ÛŒØ¯ Ø¨Ù‡â€ŒØ¹Ù†ÙˆØ§Ù† ØªØµÙˆÛŒØ± Ù†Ù…ÙˆÙ†Ù‡ Ù†Ù‡Ø§ÛŒÛŒ Ø¯Ø³Øª Ø±Ø¨Ø§ØªÛŒÚ© Ù…Ø¹Ø±ÙÛŒ Ø´ÙˆÙ†Ø¯.",
  gallery: [
     {
       src: "/projects/robotic-hand/hand-sensor.jpeg",
       alt: "ØªØ¬Ù‡ÛŒØ²Ø§Øª Ø­Ø³Ú¯Ø±ÛŒ Ù…ØªØµÙ„ Ø¨Ù‡ Ø¯Ø³Øª Ø§Ù†Ø³Ø§Ù† Ø¯Ø± Ø¢Ø²Ù…Ø§ÛŒØ´ Ø«Ø¨Øª Ø­Ø±Ú©Øª",
            caption:
      "Ø¢Ø²Ù…Ø§ÛŒØ´ Ø­Ø³Ú¯Ø±ÛŒ Ø¯Ø³Øª Ø¨Ø±Ø§ÛŒ Ø«Ø¨Øª Ø­Ø±Ú©Øª Ùˆ ØªØ¨Ø¯ÛŒÙ„ Ø±ÙØªØ§Ø± Ø§Ù†Ú¯Ø´ØªØ§Ù† Ø¨Ù‡ Ø¯Ø§Ø¯Ù‡ Ù‚Ø§Ø¨Ù„ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ø¯Ø± Ú©Ù†ØªØ±Ù„.",
           width: 474,
      height: 437,
      },
     {
        src: "/projects/robotic-hand/hand-motion-capture.jpeg",
       alt: "Ù†Ù…Ø§ÛŒØ´ Ù…ÙØ§ØµÙ„ Ùˆ Ø§Ø³Ú©Ù„Øª Ø¯ÛŒØ¬ÛŒØªØ§Ù„ Ø¯Ø³Øª Ø±ÙˆÛŒ Ù…Ø§Ù†ÛŒØªÙˆØ±",
            caption:
      "Ø±Ø¯ÛŒØ§Ø¨ÛŒ Ø¯ÛŒØ¬ÛŒØªØ§Ù„ Ù…ÙØ§ØµÙ„ Ø¯Ø³Øª Ø¨Ø±Ø§ÛŒ Ù†Ù…Ø§ÛŒØ´ Ø³ÛŒÙ†Ù…Ø§ØªÛŒÚ© Ùˆ Ø¢Ù…Ø§Ø¯Ù‡â€ŒØ³Ø§Ø²ÛŒ Ø¯Ø§Ø¯Ù‡ Ø­Ø±Ú©Øª.",
           width: 469,
      height: 460,
      },
     ],
    usefulnessEyebrow: "Ø§Ø±Ø²Ø´ Ø¨Ø§Ù„Ù‚ÙˆÙ‡",
    usefulnessTitle: "Ú†Ø±Ø§ Ø¯Ø³Øª Ø±Ø¨Ø§ØªÛŒÚ© Ù‡ÙˆØ´Ù…Ù†Ø¯ Ù…ÛŒâ€ŒØªÙˆØ§Ù†Ø¯ Ù…ÙÛŒØ¯ Ø¨Ø§Ø´Ø¯",
    usefulnessDescription:
      "Ú¯Ø±ÛŒÙ¾Ø±Ù‡Ø§ÛŒ Ù…Ø¹Ù…ÙˆÙ„ÛŒ Ø¨Ø±Ø§ÛŒ ÙˆØ¸Ø§ÛŒÙ Ù‚Ø§Ø¨Ù„ Ù¾ÛŒØ´â€ŒØ¨ÛŒÙ†ÛŒ Ø¨Ø³ÛŒØ§Ø± Ù…Ù†Ø§Ø³Ø¨â€ŒØ§Ù†Ø¯Ø› Ø§Ù…Ø§ ÛŒÚ© Ø¯Ø³Øª ØªØ·Ø¨ÛŒÙ‚ÛŒ Ùˆ Ø­Ø³Ú¯Ø±Ù…Ø­ÙˆØ± Ù…ÛŒâ€ŒØªÙˆØ§Ù†Ø¯ Ø¯Ø± Ù…Ø­ÛŒØ·â€ŒÙ‡Ø§ÛŒÛŒ Ú©Ù‡ Ø´Ú©Ù„ Ùˆ Ø´Ø±Ø§ÛŒØ· Ø§Ø¬Ø³Ø§Ù… ØªØºÛŒÛŒØ± Ù…ÛŒâ€ŒÚ©Ù†Ø¯ Ø§Ø±Ø²Ø´ Ø§ÛŒØ¬Ø§Ø¯ Ú©Ù†Ø¯.",
    usefulness: [
      "Ø¬Ø§Ø¨Ø¬Ø§ÛŒÛŒ Ø§Ù†Ø¹Ø·Ø§Ùâ€ŒÙ¾Ø°ÛŒØ± Ø§Ø¬Ø³Ø§Ù… Ø¨Ø§ Ø´Ú©Ù„ Ùˆ Ø§Ù†Ø¯Ø§Ø²Ù‡ Ù…ØªÙØ§ÙˆØª",
      "Ú¯Ø±ÙØªÙ† Ù…Ø¨ØªÙ†ÛŒ Ø¨Ø± Ù†ÛŒØ±Ùˆ Ø¨Ø±Ø§ÛŒ Ø§Ø¬Ø³Ø§Ù… Ø¸Ø±ÛŒÙ ÛŒØ§ ØªØºÛŒÛŒØ±Ø´Ú©Ù„â€ŒÙ¾Ø°ÛŒØ±",
      "Ø§ØªÙˆÙ…Ø§Ø³ÛŒÙˆÙ† Ø¨Ø³ØªÙ‡â€ŒØ¨Ù†Ø¯ÛŒØŒ Ù…Ø±ØªØ¨â€ŒØ³Ø§Ø²ÛŒØŒ Ù…ÙˆÙ†ØªØ§Ú˜ Ùˆ Ù„Ø¬Ø³ØªÛŒÚ©",
      "Ù¾Ú˜ÙˆÙ‡Ø´ Ùˆ Ø¢Ù…ÙˆØ²Ø´ Ø±Ø¨Ø§ØªÛŒÚ©ØŒ Ú©Ù†ØªØ±Ù„ Ùˆ ÛŒØ§Ø¯Ú¯ÛŒØ±ÛŒ Ù…Ø§Ø´ÛŒÙ†",
      "Ù¾Ù„ØªÙØ±Ù… Ø§Ù†Ø¯Ø§ÙÚ©ØªÙˆØ± Ù‚Ø§Ø¨Ù„ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ø¨Ø±Ø§ÛŒ ÛŒÚ©Ù¾Ø§Ø±Ú†Ù‡â€ŒØ³Ø§Ø²Ø§Ù† Ø§ØªÙˆÙ…Ø§Ø³ÛŒÙˆÙ†",
      "Ù¾Ú˜ÙˆÙ‡Ø´ Ø¢ÛŒÙ†Ø¯Ù‡ Ø¯Ø± ÙÙ†Ø§ÙˆØ±ÛŒ Ú©Ù…Ú©ÛŒØŒ Ù…Ø´Ø±ÙˆØ· Ø¨Ù‡ Ø§Ø¹ØªØ¨Ø§Ø±Ø³Ù†Ø¬ÛŒ Ø§ÛŒÙ…Ù†ÛŒ Ùˆ Ù…Ù‚Ø±Ø±Ø§ØªÛŒ",
    ],
    architectureEyebrow: "Ù¾Ø´ØªÙ‡ ÙÙ†Ø§ÙˆØ±ÛŒ",
    architectureTitle: "ÛŒÚ©Ù¾Ø§Ø±Ú†Ú¯ÛŒ Ø³Ø®Øªâ€ŒØ§ÙØ²Ø§Ø± Ùˆ Ù†Ø±Ù…â€ŒØ§ÙØ²Ø§Ø± Ø¯Ø± ÛŒÚ© Ø³Ø§Ù…Ø§Ù†Ù‡ Ú©Ù†ØªØ±Ù„",
    architectureDescription:
      "Ù…Ø¹Ù…Ø§Ø±ÛŒØŒ Ø§Ø¯Ø±Ø§Ú© Ùˆ Ø¨Ø±Ù†Ø§Ù…Ù‡â€ŒØ±ÛŒØ²ÛŒ Ø³Ø·Ø­ Ø¨Ø§Ù„Ø§ Ø±Ø§ Ø§Ø² Ú©Ù†ØªØ±Ù„ Ø¨Ù„Ø§Ø¯Ø±Ù†Ú¯ Ù…ÙˆØªÙˆØ± Ø¬Ø¯Ø§ Ù…ÛŒâ€ŒÚ©Ù†Ø¯ ØªØ§ Ù¾Ø±Ø¯Ø§Ø²Ø´ Ù‡ÙˆØ´Ù…Ù†Ø¯ Ø¨Ø¯ÙˆÙ† Ø§Ø² Ø¯Ø³Øª Ø¯Ø§Ø¯Ù† Ù¾Ø§Ø³Ø® Ù‚Ø·Ø¹ÛŒ Ùˆ Ø§ÛŒÙ…Ù†ÛŒ Ø§Ù†Ø¬Ø§Ù… Ø´ÙˆØ¯.",
    hardwareTitle: "Ø³Ø®Øªâ€ŒØ§ÙØ²Ø§Ø±",
    hardware: [
      {
        title: "Ø±Ø§ÛŒØ§Ù†Ù‡ Ù„Ø¨Ù‡ NVIDIA Jetson",
        description:
          "Ø§Ø¬Ø±Ø§ÛŒ Ø¨ÛŒÙ†Ø§ÛŒÛŒ Ù…Ø§Ø´ÛŒÙ†ØŒ Ø§Ø³ØªÙ†ØªØ§Ø¬ Ø´Ø¨Ú©Ù‡ Ø¹ØµØ¨ÛŒØŒ Ø¨Ø±Ù†Ø§Ù…Ù‡â€ŒØ±ÛŒØ²ÛŒ Ú¯Ø±ÙØªÙ† Ùˆ Ù‡Ù…Ø§Ù‡Ù†Ú¯ÛŒ ROS 2.",
      },
      {
        title: "Ú©Ù†ØªØ±Ù„â€ŒÚ¯Ø± Ø¨Ù„Ø§Ø¯Ø±Ù†Ú¯ ARM",
        description:
          "Ú©Ù†ØªØ±Ù„â€ŒÚ¯Ø±ÛŒ Ù…Ø§Ù†Ù†Ø¯ STM32H7 ÛŒØ§ Ú¯Ø²ÛŒÙ†Ù‡ Ù‡Ù…â€ŒØ³Ø·Ø­ØŒ Ø­Ù„Ù‚Ù‡ Ù…ÙˆØªÙˆØ±ØŒ Ø­Ø³Ú¯Ø±Ù‡Ø§ Ùˆ Ù…Ù†Ø·Ù‚ Ø§ÛŒÙ…Ù†ÛŒ Ù…Ø­Ù„ÛŒ Ø±Ø§ Ø§Ø¬Ø±Ø§ Ù…ÛŒâ€ŒÚ©Ù†Ø¯.",
      },
      {
        title: "Ù…Ø­Ø±Ú©â€ŒÙ‡Ø§ Ùˆ Ø¯Ø±Ø§ÛŒÙˆØ±Ù‡Ø§ÛŒ Ù…ÙˆØªÙˆØ±",
        description:
          "Ø·Ø±Ø­ Ú©Ø§Ù…Ù„ Ù…ÛŒâ€ŒØªÙˆØ§Ù†Ø¯ Ø­Ø¯ÙˆØ¯ Ù¾Ø§Ù†Ø²Ø¯Ù‡ Ù…Ø­Ø±Ú© Ø¯Ø§Ø´ØªÙ‡ Ø¨Ø§Ø´Ø¯ Ùˆ Ù‡Ø± Ù…ÙØµÙ„ Ø¨Ù‡ Ø¯Ø±Ø§ÛŒÙˆ Ùˆ Ø­ÙØ§Ø¸Øª Ø¬Ø±ÛŒØ§Ù† Ù†ÛŒØ§Ø² Ø¯Ø§Ø±Ø¯.",
      },
      {
        title: "Ø­Ø³Ú¯Ø± Ù…ÙˆÙ‚Ø¹ÛŒØª Ùˆ Ù†ÛŒØ±Ùˆ",
        description:
          "Ø§Ù†Ú©ÙˆØ¯Ø±ØŒ Ø­Ø³Ú¯Ø± Hall ÛŒØ§ Ù¾ØªØ§Ù†Ø³ÛŒÙˆÙ…ØªØ± Ø¨Ø±Ø§ÛŒ Ù…ÙˆÙ‚Ø¹ÛŒØª Ùˆ Ø­Ø³Ú¯Ø± Ø¬Ø±ÛŒØ§Ù†ØŒ ÙØ´Ø§Ø±ØŒ Ù†ÛŒØ±Ùˆ ÛŒØ§ Ù„Ø§Ù…Ø³Ù‡ Ø¨Ø±Ø§ÛŒ ØªÙ…Ø§Ø³ Ú©Ù†ØªØ±Ù„â€ŒØ´Ø¯Ù‡.",
      },
      {
        title: "Ø¯Ø±ÛŒØ§ÙØª Ø³ÛŒÚ¯Ù†Ø§Ù„ Ø¢Ù†Ø§Ù„ÙˆÚ¯",
        description:
          "Ù…Ø¨Ø¯Ù„â€ŒÙ‡Ø§ÛŒÛŒ Ù…Ø§Ù†Ù†Ø¯ ADS1115ØŒ ADS1015 ÛŒØ§ MCP3008 Ø¨Ø±Ø§ÛŒ Ø¯Ø±ÛŒØ§ÙØª Ø¯Ø§Ø¯Ù‡ Ù†ÛŒØ±ÙˆØŒ Ø®Ù…Ø´ Ùˆ ÙØ´Ø§Ø±.",
      },
      {
        title: "Ø§Ø±ØªØ¨Ø§Ø· ØµÙ†Ø¹ØªÛŒ Ùˆ Ø§ÛŒÙ…Ù†ÛŒ",
        description:
          "EtherCAT ÛŒØ§ ÛŒÚ© Ø§Ø±ØªØ¨Ø§Ø· Ù‚Ø·Ø¹ÛŒ Ø§Ø¹ØªØ¨Ø§Ø±Ø³Ù†Ø¬ÛŒâ€ŒØ´Ø¯Ù‡ Ø¨Ù‡ Ù‡Ù…Ø±Ø§Ù‡ watchdogØŒ Ù…Ø­Ø¯ÙˆØ¯ÛŒØªâ€ŒÙ‡Ø§ Ùˆ ØªÙˆÙ‚Ù Ø§Ø¶Ø·Ø±Ø§Ø±ÛŒ.",
      },
    ],
    softwareTitle: "Ù†Ø±Ù…â€ŒØ§ÙØ²Ø§Ø±",
    software: [
      {
        title: "LinuxØŒ CUDA Ùˆ TensorRT",
        description:
          "Ø´ØªØ§Ø¨â€ŒØ¯Ù‡ÛŒ Ø¨ÛŒÙ†Ø§ÛŒÛŒ Ù…Ø§Ø´ÛŒÙ† Ùˆ Ø§Ø³ØªÙ†ØªØ§Ø¬ Ø´Ø¨Ú©Ù‡ Ø¹ØµØ¨ÛŒ Ø±ÙˆÛŒ Jetson.",
      },
      {
        title: "PythonØŒ C++ Ùˆ OpenCV",
        description:
          "Ù¾Ø±Ø¯Ø§Ø²Ø´ ØªØµÙˆÛŒØ±ØŒ Ø§Ø¯Ø±Ø§Ú©ØŒ Ø¢Ù…Ø§Ø¯Ù‡â€ŒØ³Ø§Ø²ÛŒ Ø¯Ø§Ø¯Ù‡ØŒ Ø¢Ø²Ù…ÙˆÙ† Ùˆ Ú©Ù†ØªØ±Ù„ Ø³Ø·Ø­ Ú©Ø§Ø±Ø¨Ø±Ø¯.",
      },
      {
        title: "PyTorch Ùˆ Ø¨Ù‡ÛŒÙ†Ù‡â€ŒØ³Ø§Ø²ÛŒ Ù…Ø¯Ù„",
        description:
          "Ø¢Ù…ÙˆØ²Ø´ ÛŒØ§ ÛŒÚ©Ù¾Ø§Ø±Ú†Ù‡â€ŒØ³Ø§Ø²ÛŒ Ù…Ø¯Ù„â€ŒÙ‡Ø§ÛŒ Ø§Ø¯Ø±Ø§Ú© Ùˆ Ø¢Ù…Ø§Ø¯Ù‡â€ŒØ³Ø§Ø²ÛŒ Ø¢Ù†â€ŒÙ‡Ø§ Ø¨Ø±Ø§ÛŒ Ø§Ø¬Ø±Ø§ Ø±ÙˆÛŒ Ø³Ø®Øªâ€ŒØ§ÙØ²Ø§Ø± Ù„Ø¨Ù‡.",
      },
      {
        title: "ROS 2",
        description:
          "Ú¯Ø±Ù‡â€ŒÙ‡Ø§ÛŒ Ù…Ø§Ú˜ÙˆÙ„Ø§Ø± Ø¨Ø±Ø§ÛŒ Ø¨ÛŒÙ†Ø§ÛŒÛŒØŒ Ø¨Ø±Ù†Ø§Ù…Ù‡â€ŒØ±ÛŒØ²ÛŒ Ú¯Ø±ÙØªÙ†ØŒ Ú©Ù†ØªØ±Ù„ØŒ Ø«Ø¨Øª Ø¯Ø§Ø¯Ù‡ Ùˆ ÛŒÚ©Ù¾Ø§Ø±Ú†Ù‡â€ŒØ³Ø§Ø²ÛŒ.",
      },
      {
        title: "FreeRTOS ÛŒØ§ firmware Ø¨Ø¯ÙˆÙ† Ø³ÛŒØ³ØªÙ…â€ŒØ¹Ø§Ù…Ù„",
        description:
          "Ø§Ø¬Ø±Ø§ÛŒ ÙˆØ¸Ø§ÛŒÙ Ú©Ù†ØªØ±Ù„ Ù…ÙˆØªÙˆØ±ØŒ Ù†Ù…ÙˆÙ†Ù‡â€ŒØ¨Ø±Ø¯Ø§Ø±ÛŒ Ø­Ø³Ú¯Ø±ØŒ Ø®Ø·Ø§ Ùˆ watchdog Ø±ÙˆÛŒ ARM.",
      },
      {
        title: "Ú©Ù†ØªØ±Ù„ PID Ùˆ Ú©Ù†ØªØ±Ù„ ØªØ·Ø¨ÛŒÙ‚ÛŒ",
        description:
          "Ø­Ù„Ù‚Ù‡â€ŒÙ‡Ø§ÛŒ Ø³Ø±ÛŒØ¹ Ø¨Ø±Ø§ÛŒ Ú©Ù†ØªØ±Ù„ Ù…ÙˆÙ‚Ø¹ÛŒØªØŒ Ø³Ø±Ø¹Øª ÛŒØ§ Ù†ÛŒØ±Ùˆ Ùˆ ØªÙˆØ³Ø¹Ù‡ Ø¢ÛŒÙ†Ø¯Ù‡ Ú©Ù†ØªØ±Ù„ ÛŒØ§Ø¯Ú¯ÛŒØ±ÛŒâ€ŒÙ…Ø­ÙˆØ±.",
      },
    ],
    workflowEyebrow: "ÙØ±Ø§ÛŒÙ†Ø¯ Ú©Ù†ØªØ±Ù„",
    workflowTitle: "Ù†Ø­ÙˆÙ‡ Ø¹Ù…Ù„Ú©Ø±Ø¯ Ù…ÙˆØ±Ø¯ Ø§Ù†ØªØ¸Ø§Ø± Ø³Ø§Ù…Ø§Ù†Ù‡",
    workflowDescription:
      "ÙØ±Ù…Ø§Ù† Ú¯Ø±ÙØªÙ† Ø§Ø² Ù…Ø³ÛŒØ± Ø§Ø¯Ø±Ø§Ú©ØŒ Ø¨Ø±Ù†Ø§Ù…Ù‡â€ŒØ±ÛŒØ²ÛŒØŒ Ú©Ù†ØªØ±Ù„ Ù‚Ø·Ø¹ÛŒ Ùˆ Ø¨Ø§Ø²Ø®ÙˆØ±Ø¯ Ø­Ø³Ú¯Ø± Ø¨Ù‡ Ø­Ø±Ú©Øª ØªØ¨Ø¯ÛŒÙ„ Ù…ÛŒâ€ŒØ´ÙˆØ¯.",
    workflow: [
      {
        title: "Ù…Ø´Ø§Ù‡Ø¯Ù‡",
        description:
          "Ø¯ÙˆØ±Ø¨ÛŒÙ†â€ŒÙ‡Ø§ Ùˆ Ø­Ø³Ú¯Ø±Ù‡Ø§ Ø§Ø·Ù„Ø§Ø¹Ø§Øª Ø¬Ø³Ù…ØŒ ÙˆØ¶Ø¹ÛŒØª Ø¯Ø³Øª Ùˆ Ù…Ø­ÛŒØ· Ø±Ø§ Ø¯Ø±ÛŒØ§ÙØª Ù…ÛŒâ€ŒÚ©Ù†Ù†Ø¯.",
      },
      {
        title: "ØªÙØ³ÛŒØ±",
        description:
          "Jetson ÙˆØ¶Ø¹ÛŒØª Ø¬Ø³Ù… Ùˆ Ù†ÙˆØ¹ Ù…Ù†Ø§Ø³Ø¨ Ú¯Ø±ÙØªÙ† Ø±Ø§ Ø¨Ø±Ø¢ÙˆØ±Ø¯ Ù…ÛŒâ€ŒÚ©Ù†Ø¯.",
      },
      {
        title: "Ø¨Ø±Ù†Ø§Ù…Ù‡â€ŒØ±ÛŒØ²ÛŒ",
        description:
          "Ø§Ù‡Ø¯Ø§Ù Ù…ÙˆÙ‚Ø¹ÛŒØªØŒ Ù†ÛŒØ±Ùˆ ÛŒØ§ Ø§Ù„Ú¯ÙˆÛŒ Ù‡Ù…Ø§Ù‡Ù†Ú¯ Ø­Ø±Ú©Øª Ø§Ù†Ú¯Ø´ØªØ§Ù† ØªÙˆÙ„ÛŒØ¯ Ù…ÛŒâ€ŒØ´ÙˆØ¯.",
      },
      {
        title: "Ú©Ù†ØªØ±Ù„",
        description:
          "Ú©Ù†ØªØ±Ù„â€ŒÚ¯Ø± ARM ÙØ±Ù…Ø§Ù† Ù…ÙˆØªÙˆØ± Ø±Ø§ Ø¨Ø§ Ù†Ø±Ø® Ù‚Ø·Ø¹ÛŒ Ø§Ø¬Ø±Ø§ Ùˆ Ù…Ø­Ø¯ÙˆØ¯ÛŒØªâ€ŒÙ‡Ø§ Ø±Ø§ Ø§Ø¹Ù…Ø§Ù„ Ù…ÛŒâ€ŒÚ©Ù†Ø¯.",
      },
      {
        title: "ØªØ·Ø¨ÛŒÙ‚",
        description:
          "Ø¨Ø§Ø²Ø®ÙˆØ±Ø¯ Ù…ÙˆÙ‚Ø¹ÛŒØªØŒ Ø¬Ø±ÛŒØ§Ù†ØŒ Ù†ÛŒØ±Ùˆ Ùˆ Ù„Ø§Ù…Ø³Ù‡ Ú¯Ø±ÙØªÙ† Ø±Ø§ Ø§ØµÙ„Ø§Ø­ ÛŒØ§ Ø³Ø§Ù…Ø§Ù†Ù‡ Ø±Ø§ Ù…ØªÙˆÙ‚Ù Ù…ÛŒâ€ŒÚ©Ù†Ø¯.",
      },
    ],
    evaluationEyebrow: "Ø§Ø¹ØªØ¨Ø§Ø±Ø³Ù†Ø¬ÛŒ",
    evaluationTitle: "Ø±ÙˆØ´ Ø§Ø±Ø²ÛŒØ§Ø¨ÛŒ Ù†Ù…ÙˆÙ†Ù‡ Ø§ÙˆÙ„ÛŒÙ‡",
    evaluationDescription:
      "Ù…ÙˆÙÙ‚ÛŒØª Ù¾Ø±ÙˆÚ˜Ù‡ Ø¨Ø§ÛŒØ¯ Ø¨Ø§ Ø´ÙˆØ§Ù‡Ø¯ Ù…Ù‡Ù†Ø¯Ø³ÛŒ Ù‚Ø§Ø¨Ù„ Ø§Ù†Ø¯Ø§Ø²Ù‡â€ŒÚ¯ÛŒØ±ÛŒ Ù†Ø´Ø§Ù† Ø¯Ø§Ø¯Ù‡ Ø´ÙˆØ¯ØŒ Ù†Ù‡ ÙÙ‚Ø· ÛŒÚ© Ù†Ù…Ø§ÛŒØ´ Ø¬Ø°Ø§Ø¨.",
    metrics: [
      "Ù†Ø±Ø® Ù…ÙˆÙÙ‚ÛŒØª Ú¯Ø±ÙØªÙ† Ø¯Ø± Ù…Ø¬Ù…ÙˆØ¹Ù‡ Ù…Ø´Ø®ØµÛŒ Ø§Ø² Ø§Ø¬Ø³Ø§Ù…",
      "Ø®Ø·Ø§ÛŒ Ú©Ù†ØªØ±Ù„ Ù…ÙˆÙ‚Ø¹ÛŒØª Ùˆ Ù†ÛŒØ±Ùˆ",
      "Ø­Ø¯Ø§Ú©Ø«Ø± Ù†ÛŒØ±ÙˆÛŒ ØªÙ…Ø§Ø³ Ø¨Ø§ Ø§Ø¬Ø³Ø§Ù… Ø¸Ø±ÛŒÙ",
      "Ø²Ù…Ø§Ù† Ù¾Ø§Ø³Ø® Ùˆ Ø²Ù…Ø§Ù† Ú©Ø§Ù…Ù„ Ú†Ø±Ø®Ù‡ Ú¯Ø±ÙØªÙ†",
      "Ø²Ù…Ø§Ù†â€ŒØ¨Ù†Ø¯ÛŒ Ø§Ø±ØªØ¨Ø§Ø·ØŒ jitter Ùˆ Ø§Ø² Ø¯Ø³Øª Ø±ÙØªÙ† Ø¨Ø³ØªÙ‡",
      "Ø¹Ù…Ù„Ú©Ø±Ø¯ ØªØ´Ø®ÛŒØµ Ø®Ø·Ø§ Ùˆ Ø¨Ø§Ø²ÛŒØ§Ø¨ÛŒ",
      "ØªÚ©Ø±Ø§Ø±Ù¾Ø°ÛŒØ±ÛŒ Ø¯Ø± Ø¢Ø²Ù…ÙˆÙ†â€ŒÙ‡Ø§ÛŒ Ù…ØªÙˆØ§Ù„ÛŒ",
      "Ù…ØµØ±Ù Ø§Ù†Ø±Ú˜ÛŒØŒ Ø¨Ø§Ø± Ù‚Ø§Ø¨Ù„ Ø­Ù…Ù„ Ùˆ Ø¯Ù…Ø§ÛŒ Ù…Ø­Ø±Ú©",
    ],
    roadmapEyebrow: "Ù†Ù‚Ø´Ù‡ Ø±Ø§Ù‡ ØªÙˆØ³Ø¹Ù‡",
    roadmapTitle: "Ù…Ø³ÛŒØ± Ù…Ø±Ø­Ù„Ù‡â€ŒØ§ÛŒ Ø§Ø² Ù¾Ú˜ÙˆÙ‡Ø´ ØªØ§ Ù¾Ø§ÛŒÙ„ÙˆØª ØµÙ†Ø¹ØªÛŒ",
  },

  zh: {
    statusLabel: "å½“å‰é¡¹ç›®çŠ¶æ€",
    statusDescription:
      "é¡¹ç›®ç›®å‰å¤„äºŽç ”ç©¶ã€ç³»ç»Ÿæž¶æž„å’Œåˆ†é˜¶æ®µåŽŸåž‹å¼€å‘é˜¶æ®µã€‚ä¸‹æ–¹ç…§ç‰‡å±•ç¤ºæ—©æœŸä¼ æ„Ÿå’ŒåŠ¨ä½œæ•æ‰å®žéªŒï¼Œå¹¶ä¸æ˜¯æœ€ç»ˆæœºå™¨äººæ‰‹äº§å“ã€‚",
    overviewTitle: "é¡¹ç›®ç®€ä»‹",
    overviewParagraphs: [
      "æ™ºèƒ½æœºå™¨äººæ‰‹æ˜¯ä¸€ä¸ªæ¨¡å—åŒ–æ“ä½œå¹³å°ï¼Œç»“åˆæœºæ¢°è®¾è®¡ã€ä¼ æ„Ÿã€ç¡®å®šæ€§ç”µæœºæŽ§åˆ¶ã€è®¡ç®—æœºè§†è§‰å’Œè¾¹ç¼˜äººå·¥æ™ºèƒ½ã€‚",
      "æ ¸å¿ƒç ”ç©¶é—®é¢˜æ˜¯ï¼šåœ¨æ— éœ€é€ä¸ªç¼–ç¨‹æ‰‹æŒ‡åŠ¨ä½œçš„æƒ…å†µä¸‹ï¼Œæœºå™¨äººæ‰‹èƒ½å¦æ ¹æ®ç‰©ä½“çš„å½¢çŠ¶ã€æ–¹å‘ã€é‡é‡å’Œè„†å¼±ç¨‹åº¦è°ƒæ•´æŠ“å–æ–¹å¼ã€‚",
      "å¼€å‘ä»Žå¯æµ‹é‡çš„å­ç³»ç»Ÿå¼€å§‹ï¼ŒåŒ…æ‹¬äººæ‰‹åŠ¨ä½œæ•æ‰ã€é£ŸæŒ‡å’Œæ‹‡æŒ‡æœºæž„ã€åŠ›ä¸Žä½ç½®ä¼ æ„Ÿä»¥åŠå®žæ—¶ç”µæœºæŽ§åˆ¶ã€‚",
    ],
    galleryEyebrow: "å¼€å‘è¯æ®",
    galleryTitle: "æ‰‹éƒ¨ä¼ æ„Ÿä¸ŽåŠ¨ä½œæ•æ‰å®žéªŒ",
    galleryDescription:
      "è¿™äº›å›¾åƒå±•ç¤ºç”¨äºŽç†è§£äººæ‰‹åŠ¨ä½œã€å…³èŠ‚å…³ç³»å’Œä¼ æ„Ÿå™¨è¾“å…¥çš„æ—©æœŸå®žéªŒå·¥ä½œã€‚",
    galleryNote:
      "è¿™äº›å›¾åƒè®°å½•ä¼ æ„Ÿä¸ŽåŠ¨ä½œæ•æ‰å®žéªŒï¼Œä¸åº”è¢«æè¿°ä¸ºæœ€ç»ˆæœºå™¨äººæ‰‹åŽŸåž‹çš„ç…§ç‰‡ã€‚",
    gallery: [
       {
       src: "/projects/robotic-hand/hand-sensor.jpeg",
       alt: "åŠ¨ä½œæ•æ‰å®žéªŒä¸­å®‰è£…åœ¨äººæ‰‹ä¸Šçš„ä¼ æ„Ÿè®¾å¤‡",
       caption:
      "ç”¨äºŽè®°å½•æ‰‹éƒ¨åŠ¨ä½œå¹¶ç ”ç©¶å¦‚ä½•å°†æ‰‹æŒ‡è¡Œä¸ºè½¬æ¢ä¸ºæŽ§åˆ¶æ•°æ®çš„ä¼ æ„Ÿå®žéªŒã€‚",
       width: 474,
       height: 437,
       },
      {
       src: "/projects/robotic-hand/hand-motion-capture.jpeg",
       alt: "æ˜¾ç¤ºæ‰‹éƒ¨å…³èŠ‚ä¸Žéª¨æž¶æ¨¡åž‹çš„è®¡ç®—æœºç”»é¢",
       caption:
      "ç”¨äºŽæ˜¾ç¤ºæ‰‹éƒ¨è¿åŠ¨å­¦å¹¶ä¸ºå»ºæ¨¡å’ŒæŽ§åˆ¶å‡†å¤‡åŠ¨ä½œæ•°æ®çš„æ•°å­—å…³èŠ‚è·Ÿè¸ªã€‚",
       width: 469,
       height: 460,
        },
      ],
    usefulnessEyebrow: "æ½œåœ¨ä»·å€¼",
    usefulnessTitle: "æ™ºèƒ½æœºå™¨äººæ‰‹çš„ç”¨é€”",
    usefulnessDescription:
      "ä¼ ç»Ÿå¤¹å…·é€‚åˆå¯é¢„æµ‹ä»»åŠ¡ï¼Œè€Œä¼ æ„Ÿä¸°å¯Œçš„è‡ªé€‚åº”æœºå™¨äººæ‰‹å¯åœ¨ç‰©ä½“å’Œæ“ä½œæ¡ä»¶å˜åŒ–æ—¶æä¾›æ›´å¤šçµæ´»æ€§ã€‚",
    usefulness: [
      "å¤„ç†ä¸åŒå½¢çŠ¶å’Œå°ºå¯¸çš„ç‰©ä½“",
      "å¯¹æ˜“ç¢Žæˆ–å¯å˜å½¢ç‰©ä½“è¿›è¡ŒåŠ›æ„ŸçŸ¥æŠ“å–",
      "åŒ…è£…ã€åˆ†æ‹£ã€è£…é…å’Œç‰©æµè‡ªåŠ¨åŒ–",
      "æœºå™¨äººã€æŽ§åˆ¶ä¸Žæœºå™¨å­¦ä¹ ç ”ç©¶å’Œæ•™è‚²",
      "é¢å‘è‡ªåŠ¨åŒ–é›†æˆå•†çš„å¯å¤ç”¨æœ«ç«¯æ‰§è¡Œå™¨å¹³å°",
      "æœªæ¥è¾…åŠ©æŠ€æœ¯ç ”ç©¶ï¼Œä½†å¿…é¡»å®Œæˆå®‰å…¨å’Œç›‘ç®¡éªŒè¯",
    ],
    architectureEyebrow: "æŠ€æœ¯æ ˆ",
    architectureTitle: "ç¡¬ä»¶ä¸Žè½¯ä»¶ç»„æˆç»Ÿä¸€æŽ§åˆ¶ç³»ç»Ÿ",
    architectureDescription:
      "æž¶æž„å°†é«˜å±‚æ„ŸçŸ¥ä¸Žè§„åˆ’å’Œæ—¶é—´å…³é”®çš„æœ¬åœ°ç”µæœºæŽ§åˆ¶åˆ†ç¦»ï¼Œä»¥å…¼é¡¾äººå·¥æ™ºèƒ½å¤„ç†ã€ç¡®å®šæ€§å“åº”å’Œå®‰å…¨ã€‚",
    hardwareTitle: "ç¡¬ä»¶",
    hardware: [
      {
        title: "NVIDIA Jetson è¾¹ç¼˜è®¡ç®—æœº",
        description:
          "è¿è¡Œè®¡ç®—æœºè§†è§‰ã€ç¥žç»ç½‘ç»œæŽ¨ç†ã€æŠ“å–è§„åˆ’å’Œ ROS 2 é«˜å±‚åè°ƒã€‚",
      },
      {
        title: "ARM å®žæ—¶æŽ§åˆ¶å™¨",
        description:
          "STM32H7ã€Teensy æˆ–åŒç­‰çº§æŽ§åˆ¶å™¨æ‰§è¡Œç”µæœºçŽ¯ã€ä¼ æ„Ÿé‡‡é›†å’Œæœ¬åœ°å®‰å…¨é€»è¾‘ã€‚",
      },
      {
        title: "æ‰§è¡Œå™¨ä¸Žç”µæœºé©±åŠ¨å™¨",
        description:
          "å®Œæ•´æ¦‚å¿µå¯èƒ½ä½¿ç”¨çº¦åäº”ä¸ªæ‰§è¡Œå™¨ï¼Œæ¯ä¸ªå…³èŠ‚éœ€è¦é©±åŠ¨ç”µå­è®¾å¤‡å’Œç”µæµä¿æŠ¤ã€‚",
      },
      {
        title: "ä½ç½®ä¸ŽåŠ›ä¼ æ„Ÿ",
        description:
          "ç¼–ç å™¨ã€Hall ä¼ æ„Ÿå™¨æˆ–ç”µä½å™¨æä¾›ä½ç½®åé¦ˆï¼Œç”µæµã€åŽ‹åŠ›ã€åŠ›æˆ–è§¦è§‰ä¼ æ„Ÿå™¨æ”¯æŒæŽ¥è§¦æŽ§åˆ¶ã€‚",
      },
      {
        title: "å¤–éƒ¨æ¨¡æ‹Ÿé‡‡é›†",
        description:
          "ADS1115ã€ADS1015 æˆ– MCP3008 ç­‰ ADC å¯é‡‡é›†åŠ›ã€å¼¯æ›²å’ŒåŽ‹åŠ›ä¿¡å·ã€‚",
      },
      {
        title: "å·¥ä¸šé€šä¿¡ä¸Žå®‰å…¨",
        description:
          "EtherCAT æˆ–å…¶ä»–ç¡®å®šæ€§é€šä¿¡é…åˆçœ‹é—¨ç‹—ã€é™åˆ¶å’Œç´§æ€¥åœæ­¢è¡Œä¸ºã€‚",
      },
    ],
    softwareTitle: "è½¯ä»¶",
    software: [
      {
        title: "Linuxã€CUDA ä¸Ž TensorRT",
        description:
          "åœ¨ Jetson ä¸ŠåŠ é€Ÿè®¡ç®—æœºè§†è§‰å’Œç¥žç»ç½‘ç»œæŽ¨ç†ã€‚",
      },
      {
        title: "Pythonã€C++ ä¸Ž OpenCV",
        description:
          "ç”¨äºŽå›¾åƒå¤„ç†ã€æ„ŸçŸ¥ã€æ•°æ®å‡†å¤‡ã€æµ‹è¯•å’Œåº”ç”¨å±‚æŽ§åˆ¶ã€‚",
      },
      {
        title: "PyTorch ä¸Žæ¨¡åž‹ä¼˜åŒ–",
        description:
          "æ”¯æŒæ„ŸçŸ¥æ¨¡åž‹è®­ç»ƒæˆ–é›†æˆï¼Œå¹¶ä¼˜åŒ–ç”¨äºŽè¾¹ç¼˜éƒ¨ç½²ã€‚",
      },
      {
        title: "ROS 2",
        description:
          "æä¾›è§†è§‰ã€æŠ“å–è§„åˆ’ã€æ‰‹éƒ¨æŽ§åˆ¶ã€é¥æµ‹ã€æ—¥å¿—å’Œç³»ç»Ÿé›†æˆèŠ‚ç‚¹ã€‚",
      },
      {
        title: "FreeRTOS æˆ–è£¸æœºå›ºä»¶",
        description:
          "åœ¨ ARM æŽ§åˆ¶å™¨ä¸Šè¿è¡Œç”µæœºæŽ§åˆ¶ã€ä¼ æ„Ÿé‡‡æ ·ã€æ•…éšœå¤„ç†å’Œçœ‹é—¨ç‹—ã€‚",
      },
      {
        title: "PID ä¸Žè‡ªé€‚åº”æŽ§åˆ¶",
        description:
          "é«˜é¢‘æŽ§åˆ¶çŽ¯è°ƒèŠ‚ä½ç½®ã€é€Ÿåº¦æˆ–åŠ›ï¼Œå¹¶ä¸ºå­¦ä¹ åž‹é€‚åº”ä¿ç•™æ‰©å±•ç©ºé—´ã€‚",
      },
    ],
    workflowEyebrow: "æŽ§åˆ¶æµç¨‹",
    workflowTitle: "ç³»ç»Ÿé¢„æœŸå¦‚ä½•å·¥ä½œ",
    workflowDescription:
      "æŠ“å–å‘½ä»¤é€šè¿‡æ„ŸçŸ¥ã€è§„åˆ’ã€ç¡®å®šæ€§æŽ§åˆ¶å’Œä¼ æ„Ÿåé¦ˆè½¬æ¢ä¸ºåè°ƒåŠ¨ä½œã€‚",
    workflow: [
      {
        title: "è§‚å¯Ÿ",
        description:
          "æ‘„åƒå¤´ä¸Žä¼ æ„Ÿå™¨èŽ·å–ç‰©ä½“ã€æ‰‹éƒ¨çŠ¶æ€å’ŒçŽ¯å¢ƒä¿¡æ¯ã€‚",
      },
      {
        title: "ç†è§£",
        description:
          "Jetson ä¼°è®¡ç‰©ä½“å§¿æ€ã€å…³é”®ç‰¹å¾å’Œé€‚åˆçš„æŠ“å–æ–¹å¼ã€‚",
      },
      {
        title: "è§„åˆ’",
        description:
          "é«˜å±‚æŽ§åˆ¶å™¨ç”Ÿæˆç›®æ ‡å…³èŠ‚ä½ç½®ã€åŠ›æˆ–æ‰‹éƒ¨ååŒåŠ¨ä½œã€‚",
      },
      {
        title: "æŽ§åˆ¶",
        description:
          "ARM æŽ§åˆ¶å™¨ä»¥ç¡®å®šæ€§é¢‘çŽ‡æ‰§è¡Œç”µæœºå‘½ä»¤å¹¶å®žæ–½é™åˆ¶ã€‚",
      },
      {
        title: "é€‚åº”",
        description:
          "ä½ç½®ã€ç”µæµã€åŠ›å’Œè§¦è§‰åé¦ˆè°ƒæ•´æŠ“å–æˆ–è§¦å‘å®‰å…¨åœæ­¢ã€‚",
      },
    ],
    evaluationEyebrow: "éªŒè¯",
    evaluationTitle: "å¦‚ä½•è¯„ä¼°åŽŸåž‹",
    evaluationDescription:
      "é¡¹ç›®æˆåŠŸåº”é€šè¿‡å¯æµ‹é‡çš„å·¥ç¨‹è¯æ®è¯æ˜Žï¼Œè€Œä¸ä»…ä»…æ˜¯å¥½çœ‹çš„æ¼”ç¤ºã€‚",
    metrics: [
      "åœ¨å®šä¹‰ç‰©ä½“æµ‹è¯•é›†ä¸Šçš„æŠ“å–æˆåŠŸçŽ‡",
      "ä½ç½®ä¸ŽåŠ›æŽ§åˆ¶è¯¯å·®",
      "æ˜“ç¢Žç‰©ä½“çš„æœ€å¤§æŽ¥è§¦åŠ›",
      "å“åº”å»¶è¿Ÿä¸Žå®Œæ•´æŠ“å–å‘¨æœŸæ—¶é—´",
      "é€šä¿¡æ—¶åºã€æŠ–åŠ¨ä¸Žä¸¢åŒ…",
      "æ•…éšœæ£€æµ‹ä¸Žæ¢å¤è¡¨çŽ°",
      "é‡å¤è¯•éªŒçš„ä¸€è‡´æ€§",
      "èƒ½è€—ã€è´Ÿè½½ä¸Žæ‰§è¡Œå™¨æ¸©åº¦",
    ],
    roadmapEyebrow: "å¼€å‘è·¯çº¿å›¾",
    roadmapTitle: "ä»Žç ”ç©¶åˆ°è¡Œä¸šè¯•ç‚¹çš„åˆ†é˜¶æ®µè·¯å¾„",
  },
};

