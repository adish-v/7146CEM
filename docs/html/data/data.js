var dataJson = {"arch":{"ispc":true,"isunix":false,"ismac":false},"build":"pid_controller","ref":false,"files":[{"name":"ert_main.c","type":"source","group":"main","path":"C:\\Users\\adish\\Desktop\\repos\\cu\\cw1\\pid_controller_ert_rtw","tag":"","groupDisplay":"Main file","code":"/*\r\n * Academic License - for use in teaching, academic research, and meeting\r\n * course requirements at degree granting institutions only.  Not for\r\n * government, commercial, or other organizational use.\r\n *\r\n * File: ert_main.c\r\n *\r\n * Code generated for Simulink model 'pid_controller'.\r\n *\r\n * Model version                  : 1.84\r\n * Simulink Coder version         : 9.6 (R2021b) 14-May-2021\r\n * C/C++ source code generated on : Thu Dec  2 18:26:00 2021\r\n *\r\n * Target selection: ert.tlc\r\n * Embedded hardware selection: Intel->x86-64 (Windows64)\r\n * Code generation objectives:\r\n *    1. RAM efficiency\r\n *    2. Execution efficiency\r\n *    3. Polyspace\r\n *    4. MISRA C:2012 guidelines\r\n *    5. Traceability\r\n *    6. Safety precaution\r\n * Validation result: Not run\r\n */\r\n\r\n#include <stddef.h>\r\n#include <stdio.h>            /* This example main program uses printf/fflush */\r\n#include \"pid_controller.h\"            /* Model's header file */\r\n\r\n/*\r\n * Associating rt_OneStep with a real-time clock or interrupt service routine\r\n * is what makes the generated code \"real-time\".  The function rt_OneStep is\r\n * always associated with the base rate of the model.  Subrates are managed\r\n * by the base rate from inside the generated code.  Enabling/disabling\r\n * interrupts and floating point context switches are target specific.  This\r\n * example code indicates where these should take place relative to executing\r\n * the generated code step function.  Overrun behavior should be tailored to\r\n * your application needs.  This example simply sets an error status in the\r\n * real-time model and returns from rt_OneStep.\r\n */\r\nvoid rt_OneStep(void);\r\nvoid rt_OneStep(void)\r\n{\r\n  static boolean_T OverrunFlag = false;\r\n\r\n  /* Disable interrupts here */\r\n\r\n  /* Check for overrun */\r\n  if (OverrunFlag) {\r\n    return;\r\n  }\r\n\r\n  OverrunFlag = true;\r\n\r\n  /* Save FPU context here (if necessary) */\r\n  /* Re-enable timer or interrupt here */\r\n  /* Set model inputs here */\r\n\r\n  /* Step the model */\r\n  pid_controller_step();\r\n\r\n  /* Get model outputs here */\r\n\r\n  /* Indicate task complete */\r\n  OverrunFlag = false;\r\n\r\n  /* Disable interrupts here */\r\n  /* Restore FPU context here (if necessary) */\r\n  /* Enable interrupts here */\r\n}\r\n\r\n/*\r\n * The example \"main\" function illustrates what is required by your\r\n * application code to initialize, execute, and terminate the generated code.\r\n * Attaching rt_OneStep to a real-time clock is target specific.  This example\r\n * illustrates how you do this relative to initializing the model.\r\n */\r\nint_T main(int_T argc, const char *argv[])\r\n{\r\n  /* Unused arguments */\r\n  (void)(argc);\r\n  (void)(argv);\r\n\r\n  /* Initialize model */\r\n  pid_controller_initialize();\r\n\r\n  /* Attach rt_OneStep to a timer or interrupt service routine with\r\n   * period 0.01 seconds (the model's base sample time) here.  The\r\n   * call syntax for rt_OneStep is\r\n   *\r\n   *  rt_OneStep();\r\n   */\r\n  printf(\"Warning: The simulation will run forever. \"\r\n         \"Generated ERT main won't simulate model step behavior. \"\r\n         \"To change this behavior select the 'MAT-file logging' option.\\n\");\r\n  fflush((NULL));\r\n  while (1) {\r\n    /*  Perform application tasks here */\r\n  }\r\n\r\n  /* The option 'Remove error status field in real-time model data structure'\r\n   * is selected, therefore the following code does not need to execute.\r\n   */\r\n#if 0\r\n\r\n  /* Disable rt_OneStep here */\r\n  /* Terminate model */\r\n  pid_controller_terminate();\r\n\r\n#endif\r\n\r\n  return 0;\r\n}\r\n\r\n/*\r\n * File trailer for generated code.\r\n *\r\n * [EOF]\r\n */\r\n"},{"name":"pid_controller.c","type":"source","group":"model","path":"C:\\Users\\adish\\Desktop\\repos\\cu\\cw1\\pid_controller_ert_rtw","tag":"","groupDisplay":"Model files","code":"/*\r\n * Academic License - for use in teaching, academic research, and meeting\r\n * course requirements at degree granting institutions only.  Not for\r\n * government, commercial, or other organizational use.\r\n *\r\n * File: pid_controller.c\r\n *\r\n * Code generated for Simulink model 'pid_controller'.\r\n *\r\n * Model version                  : 1.84\r\n * Simulink Coder version         : 9.6 (R2021b) 14-May-2021\r\n * C/C++ source code generated on : Thu Dec  2 18:26:00 2021\r\n *\r\n * Target selection: ert.tlc\r\n * Embedded hardware selection: Intel->x86-64 (Windows64)\r\n * Code generation objectives:\r\n *    1. RAM efficiency\r\n *    2. Execution efficiency\r\n *    3. Polyspace\r\n *    4. MISRA C:2012 guidelines\r\n *    5. Traceability\r\n *    6. Safety precaution\r\n * Validation result: Not run\r\n */\r\n\r\n#include \"pid_controller.h\"\r\n#include \"pid_controller_private.h\"\r\n\r\n/* Block signals and states (default storage) */\r\nDW_pid_controller_T pid_controller_DW;\r\n\r\n/* External inputs (root inport signals with default storage) */\r\nExtU_pid_controller_T pid_controller_U;\r\n\r\n/* External outputs (root outports fed by signals with default storage) */\r\nExtY_pid_controller_T pid_controller_Y;\r\n\r\n/* Model step function */\r\nvoid pid_controller_step(void)\r\n{\r\n  /* Sum: '<Root>/Add Block 1' incorporates:\r\n   *  Gain: '<Root>/Ki'\r\n   *  Gain: '<Root>/Ts'\r\n   *  Inport: '<Root>/e(k)'\r\n   *  UnitDelay: '<Root>/Unit Delay 1'\r\n   */\r\n  pid_controller_DW.UnitDelay1_DSTATE += (0.01 * pid_controller_U.ek) * 100.0;\r\n\r\n  /* Outport: '<Root>/y(k)' incorporates:\r\n   *  Gain: '<Root>/Kp'\r\n   *  Inport: '<Root>/e(k)'\r\n   *  Sum: '<Root>/Add Block 3'\r\n   *  UnitDelay: '<Root>/Unit Delay 1'\r\n   */\r\n  pid_controller_Y.yk = (800.0 * pid_controller_U.ek) +\r\n    pid_controller_DW.UnitDelay1_DSTATE;\r\n\r\n  /* Update for UnitDelay: '<Root>/Unit Delay 2' incorporates:\r\n   *  Inport: '<Root>/e(k)'\r\n   */\r\n  pid_controller_DW.UnitDelay2_DSTATE = pid_controller_U.ek;\r\n}\r\n\r\n/* Model initialize function */\r\nvoid pid_controller_initialize(void)\r\n{\r\n  /* (no initialization code required) */\r\n}\r\n\r\n/* Model terminate function */\r\nvoid pid_controller_terminate(void)\r\n{\r\n  /* (no terminate code required) */\r\n}\r\n\r\n/*\r\n * File trailer for generated code.\r\n *\r\n * [EOF]\r\n */\r\n"},{"name":"pid_controller.h","type":"header","group":"model","path":"C:\\Users\\adish\\Desktop\\repos\\cu\\cw1\\pid_controller_ert_rtw","tag":"","groupDisplay":"Model files","code":"/*\r\n * Academic License - for use in teaching, academic research, and meeting\r\n * course requirements at degree granting institutions only.  Not for\r\n * government, commercial, or other organizational use.\r\n *\r\n * File: pid_controller.h\r\n *\r\n * Code generated for Simulink model 'pid_controller'.\r\n *\r\n * Model version                  : 1.84\r\n * Simulink Coder version         : 9.6 (R2021b) 14-May-2021\r\n * C/C++ source code generated on : Thu Dec  2 18:26:00 2021\r\n *\r\n * Target selection: ert.tlc\r\n * Embedded hardware selection: Intel->x86-64 (Windows64)\r\n * Code generation objectives:\r\n *    1. RAM efficiency\r\n *    2. Execution efficiency\r\n *    3. Polyspace\r\n *    4. MISRA C:2012 guidelines\r\n *    5. Traceability\r\n *    6. Safety precaution\r\n * Validation result: Not run\r\n */\r\n\r\n#ifndef RTW_HEADER_pid_controller_h_\r\n#define RTW_HEADER_pid_controller_h_\r\n#ifndef pid_controller_COMMON_INCLUDES_\r\n#define pid_controller_COMMON_INCLUDES_\r\n#include \"rtwtypes.h\"\r\n#endif                                 /* pid_controller_COMMON_INCLUDES_ */\r\n\r\n#include \"pid_controller_types.h\"\r\n\r\n/* Macros for accessing real-time model data structure */\r\n\r\n/* Block signals and states (default storage) for system '<Root>' */\r\ntypedef struct {\r\n  real_T UnitDelay1_DSTATE;            /* '<Root>/Unit Delay 1' */\r\n  real_T UnitDelay2_DSTATE;            /* '<Root>/Unit Delay 2' */\r\n} DW_pid_controller_T;\r\n\r\n/* External inputs (root inport signals with default storage) */\r\ntypedef struct {\r\n  real_T ek;                           /* '<Root>/e(k)' */\r\n} ExtU_pid_controller_T;\r\n\r\n/* External outputs (root outports fed by signals with default storage) */\r\ntypedef struct {\r\n  real_T yk;                           /* '<Root>/y(k)' */\r\n} ExtY_pid_controller_T;\r\n\r\n/* Block signals and states (default storage) */\r\nextern DW_pid_controller_T pid_controller_DW;\r\n\r\n/* External inputs (root inport signals with default storage) */\r\nextern ExtU_pid_controller_T pid_controller_U;\r\n\r\n/* External outputs (root outports fed by signals with default storage) */\r\nextern ExtY_pid_controller_T pid_controller_Y;\r\n\r\n/* Model entry point functions */\r\nextern void pid_controller_initialize(void);\r\nextern void pid_controller_step(void);\r\nextern void pid_controller_terminate(void);\r\n\r\n/*-\r\n * The generated code includes comments that allow you to trace directly\r\n * back to the appropriate location in the model.  The basic format\r\n * is <system>/block_name, where system is the system number (uniquely\r\n * assigned by Simulink) and block_name is the name of the block.\r\n *\r\n * Use the MATLAB hilite_system command to trace the generated code back\r\n * to the model.  For example,\r\n *\r\n * hilite_system('<S3>')    - opens system 3\r\n * hilite_system('<S3>/Kp') - opens and selects block Kp which resides in S3\r\n *\r\n * Here is the system hierarchy for this model\r\n *\r\n * '<Root>' : 'pid_controller'\r\n */\r\n\r\n/*-\r\n * Requirements for '<Root>': pid_controller\r\n */\r\n#endif                                 /* RTW_HEADER_pid_controller_h_ */\r\n\r\n/*\r\n * File trailer for generated code.\r\n *\r\n * [EOF]\r\n */\r\n"},{"name":"pid_controller_private.h","type":"header","group":"model","path":"C:\\Users\\adish\\Desktop\\repos\\cu\\cw1\\pid_controller_ert_rtw","tag":"","groupDisplay":"Model files","code":"/*\r\n * Academic License - for use in teaching, academic research, and meeting\r\n * course requirements at degree granting institutions only.  Not for\r\n * government, commercial, or other organizational use.\r\n *\r\n * File: pid_controller_private.h\r\n *\r\n * Code generated for Simulink model 'pid_controller'.\r\n *\r\n * Model version                  : 1.84\r\n * Simulink Coder version         : 9.6 (R2021b) 14-May-2021\r\n * C/C++ source code generated on : Thu Dec  2 18:26:00 2021\r\n *\r\n * Target selection: ert.tlc\r\n * Embedded hardware selection: Intel->x86-64 (Windows64)\r\n * Code generation objectives:\r\n *    1. RAM efficiency\r\n *    2. Execution efficiency\r\n *    3. Polyspace\r\n *    4. MISRA C:2012 guidelines\r\n *    5. Traceability\r\n *    6. Safety precaution\r\n * Validation result: Not run\r\n */\r\n\r\n#ifndef RTW_HEADER_pid_controller_private_h_\r\n#define RTW_HEADER_pid_controller_private_h_\r\n#include \"rtwtypes.h\"\r\n#endif                                /* RTW_HEADER_pid_controller_private_h_ */\r\n\r\n/*\r\n * File trailer for generated code.\r\n *\r\n * [EOF]\r\n */\r\n"},{"name":"pid_controller_types.h","type":"header","group":"model","path":"C:\\Users\\adish\\Desktop\\repos\\cu\\cw1\\pid_controller_ert_rtw","tag":"","groupDisplay":"Model files","code":"/*\r\n * Academic License - for use in teaching, academic research, and meeting\r\n * course requirements at degree granting institutions only.  Not for\r\n * government, commercial, or other organizational use.\r\n *\r\n * File: pid_controller_types.h\r\n *\r\n * Code generated for Simulink model 'pid_controller'.\r\n *\r\n * Model version                  : 1.84\r\n * Simulink Coder version         : 9.6 (R2021b) 14-May-2021\r\n * C/C++ source code generated on : Thu Dec  2 18:26:00 2021\r\n *\r\n * Target selection: ert.tlc\r\n * Embedded hardware selection: Intel->x86-64 (Windows64)\r\n * Code generation objectives:\r\n *    1. RAM efficiency\r\n *    2. Execution efficiency\r\n *    3. Polyspace\r\n *    4. MISRA C:2012 guidelines\r\n *    5. Traceability\r\n *    6. Safety precaution\r\n * Validation result: Not run\r\n */\r\n\r\n#ifndef RTW_HEADER_pid_controller_types_h_\r\n#define RTW_HEADER_pid_controller_types_h_\r\n\r\n/* Model Code Variants */\r\n#endif                                 /* RTW_HEADER_pid_controller_types_h_ */\r\n\r\n/*\r\n * File trailer for generated code.\r\n *\r\n * [EOF]\r\n */\r\n"},{"name":"rtwtypes.h","type":"header","group":"sharedutility","path":"C:\\Users\\adish\\Desktop\\repos\\cu\\cw1\\slprj\\ert\\_sharedutils","tag":"","groupDisplay":"Shared files","code":"/*\r\n * Academic License - for use in teaching, academic research, and meeting\r\n * course requirements at degree granting institutions only.  Not for\r\n * government, commercial, or other organizational use.\r\n *\r\n * File: rtwtypes.h\r\n *\r\n * Code generated for Simulink model 'pid_controller'.\r\n *\r\n * Model version                  : 1.84\r\n * Simulink Coder version         : 9.6 (R2021b) 14-May-2021\r\n * C/C++ source code generated on : Thu Dec  2 18:26:00 2021\r\n */\r\n\r\n#ifndef RTWTYPES_H\r\n#define RTWTYPES_H\r\n\r\n/* Logical type definitions */\r\n#if (!defined(__cplusplus))\r\n#ifndef false\r\n#define false                          (0U)\r\n#endif\r\n\r\n#ifndef true\r\n#define true                           (1U)\r\n#endif\r\n#endif\r\n\r\n/*=======================================================================*\r\n * Target hardware information\r\n *   Device type: Intel->x86-64 (Windows64)\r\n *   Number of bits:     char:   8    short:   16    int:  32\r\n *                       long:  32    long long:  64\r\n *                       native word size:  64\r\n *   Byte ordering: LittleEndian\r\n *   Signed integer division rounds to: Zero\r\n *   Shift right on a signed integer as arithmetic shift: on\r\n *=======================================================================*/\r\n\r\n/*=======================================================================*\r\n * Fixed width word size data types:                                     *\r\n *   int8_T, int16_T, int32_T     - signed 8, 16, or 32 bit integers     *\r\n *   uint8_T, uint16_T, uint32_T  - unsigned 8, 16, or 32 bit integers   *\r\n *   real32_T, real64_T           - 32 and 64 bit floating point numbers *\r\n *=======================================================================*/\r\ntypedef signed char int8_T;\r\ntypedef unsigned char uint8_T;\r\ntypedef short int16_T;\r\ntypedef unsigned short uint16_T;\r\ntypedef int int32_T;\r\ntypedef unsigned int uint32_T;\r\ntypedef long long int64_T;\r\ntypedef unsigned long long uint64_T;\r\ntypedef float real32_T;\r\ntypedef double real64_T;\r\n\r\n/*===========================================================================*\r\n * Generic type definitions: boolean_T, char_T, byte_T, int_T, uint_T,       *\r\n *                           real_T, time_T, ulong_T, ulonglong_T.           *\r\n *===========================================================================*/\r\ntypedef double real_T;\r\ntypedef double time_T;\r\ntypedef unsigned char boolean_T;\r\ntypedef int int_T;\r\ntypedef unsigned int uint_T;\r\ntypedef unsigned long ulong_T;\r\ntypedef unsigned long long ulonglong_T;\r\ntypedef char char_T;\r\ntypedef unsigned char uchar_T;\r\ntypedef char_T byte_T;\r\n\r\n/*===========================================================================*\r\n * Complex number type definitions                                           *\r\n *===========================================================================*/\r\n#define CREAL_T\r\n\r\ntypedef struct {\r\n  real32_T re;\r\n  real32_T im;\r\n} creal32_T;\r\n\r\ntypedef struct {\r\n  real64_T re;\r\n  real64_T im;\r\n} creal64_T;\r\n\r\ntypedef struct {\r\n  real_T re;\r\n  real_T im;\r\n} creal_T;\r\n\r\n#define CINT8_T\r\n\r\ntypedef struct {\r\n  int8_T re;\r\n  int8_T im;\r\n} cint8_T;\r\n\r\n#define CUINT8_T\r\n\r\ntypedef struct {\r\n  uint8_T re;\r\n  uint8_T im;\r\n} cuint8_T;\r\n\r\n#define CINT16_T\r\n\r\ntypedef struct {\r\n  int16_T re;\r\n  int16_T im;\r\n} cint16_T;\r\n\r\n#define CUINT16_T\r\n\r\ntypedef struct {\r\n  uint16_T re;\r\n  uint16_T im;\r\n} cuint16_T;\r\n\r\n#define CINT32_T\r\n\r\ntypedef struct {\r\n  int32_T re;\r\n  int32_T im;\r\n} cint32_T;\r\n\r\n#define CUINT32_T\r\n\r\ntypedef struct {\r\n  uint32_T re;\r\n  uint32_T im;\r\n} cuint32_T;\r\n\r\n#define CINT64_T\r\n\r\ntypedef struct {\r\n  int64_T re;\r\n  int64_T im;\r\n} cint64_T;\r\n\r\n#define CUINT64_T\r\n\r\ntypedef struct {\r\n  uint64_T re;\r\n  uint64_T im;\r\n} cuint64_T;\r\n\r\n/*=======================================================================*\r\n * Min and Max:                                                          *\r\n *   int8_T, int16_T, int32_T     - signed 8, 16, or 32 bit integers     *\r\n *   uint8_T, uint16_T, uint32_T  - unsigned 8, 16, or 32 bit integers   *\r\n *=======================================================================*/\r\n#define MAX_int8_T                     ((int8_T)(127))\r\n#define MIN_int8_T                     ((int8_T)(-128))\r\n#define MAX_uint8_T                    ((uint8_T)(255U))\r\n#define MAX_int16_T                    ((int16_T)(32767))\r\n#define MIN_int16_T                    ((int16_T)(-32768))\r\n#define MAX_uint16_T                   ((uint16_T)(65535U))\r\n#define MAX_int32_T                    ((int32_T)(2147483647))\r\n#define MIN_int32_T                    ((int32_T)(-2147483647-1))\r\n#define MAX_uint32_T                   ((uint32_T)(0xFFFFFFFFU))\r\n#define MAX_int64_T                    ((int64_T)(9223372036854775807LL))\r\n#define MIN_int64_T                    ((int64_T)(-9223372036854775807LL-1LL))\r\n#define MAX_uint64_T                   ((uint64_T)(0xFFFFFFFFFFFFFFFFULL))\r\n\r\n/* Block D-Work pointer type */\r\ntypedef void * pointer_T;\r\n\r\n#endif                                 /* RTWTYPES_H */\r\n\r\n/*\r\n * File trailer for generated code.\r\n *\r\n * [EOF]\r\n */\r\n"}],"trace":"{\"model\":\"pid_controller\",\"sources\":[\"pid_controller.c\",\"pid_controller.h\"],\"categoricalProps\":[\"ModelElemCategory\",\"StorageClass\"],\"categoricalValues\":[\"InternalData\",\"Default\",\"Inports\",\"Outports\"],\"sidPrefixes\":[\"pid_controller\"],\"fileRecords\":{\"1\":{\"records\":[{\"tk\":[39,3,39,9],\"els\":[\"1:42\"],\"ct\":{\"1\":1,\"0\":0}},{\"tk\":[39,10,39,27],\"els\":[\"1:42\"],\"ct\":{\"1\":1,\"0\":0}},{\"tk\":[39,27,39,28],\"els\":[\"1:42\"],\"ct\":{\"1\":1,\"0\":0}},{\"tk\":[40,3,40,9],\"els\":[\"1:41\"],\"ct\":{\"1\":1,\"0\":0}},{\"tk\":[40,10,40,27],\"els\":[\"1:41\"],\"ct\":{\"1\":1,\"0\":0}},{\"tk\":[40,27,40,28],\"els\":[\"1:41\"],\"ct\":{\"1\":1,\"0\":0}},{\"tk\":[45,3,45,9],\"els\":[\"1:2\"],\"ct\":{\"1\":1,\"0\":2}},{\"tk\":[45,10,45,12],\"els\":[\"1:2\"],\"ct\":{\"1\":1,\"0\":2}},{\"tk\":[45,12,45,13],\"els\":[\"1:2\"],\"ct\":{\"1\":1,\"0\":2}},{\"tk\":[50,3,50,9],\"els\":[\"1:3\"],\"ct\":{\"1\":1,\"0\":3}},{\"tk\":[50,10,50,12],\"els\":[\"1:3\"],\"ct\":{\"1\":1,\"0\":3}},{\"tk\":[50,12,50,13],\"els\":[\"1:3\"],\"ct\":{\"1\":1,\"0\":3}}]},\"0\":{\"records\":[{\"tk\":[47,3,47,20],\"els\":[\"0:9\",\"0:42\"]},{\"tk\":[47,21,47,38],\"els\":[\"0:9\",\"0:42\"]},{\"tk\":[47,39,47,41],\"els\":[\"0:9\"]},{\"tk\":[47,43,47,47],\"els\":[\"0:12\"]},{\"tk\":[47,48,47,49],\"els\":[\"0:12\"]},{\"tk\":[47,50,47,66],\"els\":[\"0:2\"]},{\"tk\":[47,67,47,69],\"els\":[\"0:2\"]},{\"tk\":[47,71,47,72],\"els\":[\"0:8\"]},{\"tk\":[47,73,47,78],\"els\":[\"0:8\"]},{\"tk\":[55,3,55,19],\"els\":[\"0:3\"]},{\"tk\":[55,20,55,22],\"els\":[\"0:3\"]},{\"tk\":[55,23,55,24],\"els\":[\"0:3\"]},{\"tk\":[55,26,55,31],\"els\":[\"0:4\"]},{\"tk\":[55,32,55,33],\"els\":[\"0:4\"]},{\"tk\":[55,34,55,50],\"els\":[\"0:2\"]},{\"tk\":[55,51,55,53],\"els\":[\"0:2\"]},{\"tk\":[55,55,55,56],\"els\":[\"0:6\"]},{\"tk\":[56,5,56,22],\"els\":[\"0:6\",\"0:42\"]},{\"tk\":[56,23,56,40],\"els\":[\"0:6\",\"0:42\"]},{\"tk\":[61,3,61,20],\"els\":[\"0:41\"]},{\"tk\":[61,21,61,38],\"els\":[\"0:41\"]},{\"tk\":[61,39,61,40],\"els\":[\"0:41\"]},{\"tk\":[61,41,61,57],\"els\":[\"0:2\"]},{\"tk\":[61,58,61,60],\"els\":[\"0:2\"]}]}}}","blocks":[{"RTWName":"<Root>/e(k)","SIDString":"pid_controller:2"},{"RTWName":"<Root>/1 over Ts","SIDString":"pid_controller:17"},{"RTWName":"<Root>/Add Block 1","SIDString":"pid_controller:9"},{"RTWName":"<Root>/Add Block 2","SIDString":"pid_controller:18"},{"RTWName":"<Root>/Add Block 3","SIDString":"pid_controller:6"},{"RTWName":"<Root>/Kd","SIDString":"pid_controller:20"},{"RTWName":"<Root>/Ki","SIDString":"pid_controller:8"},{"RTWName":"<Root>/Kp","SIDString":"pid_controller:4"},{"RTWName":"<Root>/Ts","SIDString":"pid_controller:12"},{"RTWName":"<Root>/Unit Delay 1","SIDString":"pid_controller:42"},{"RTWName":"<Root>/Unit Delay 2","SIDString":"pid_controller:41"},{"RTWName":"<Root>/y(k)","SIDString":"pid_controller:3"}],"cm":{"GlobalVarInfo":[{"Name":"pid_controller_DW","Size":16,"File":["C:\\Users\\adish\\Desktop\\repos\\cu\\cw1\\pid_controller_ert_rtw\\pid_controller.c"],"IsStatic":false,"IsBitField":false,"IsExported":true,"UseCount":4,"Members":[{"Name":"UnitDelay1_DSTATE","File":2,"Size":8,"IsStatic":false,"IsBitField":false,"IsExported":false,"UseCount":3,"Members":[],"UseInFunctions":{"FunctionName":"pid_controller_step","UseCount":3}},{"Name":"UnitDelay2_DSTATE","File":2,"Size":8,"IsStatic":false,"IsBitField":false,"IsExported":false,"UseCount":1,"Members":[],"UseInFunctions":{"FunctionName":"pid_controller_step","UseCount":1}}],"UseInFunctions":{"FunctionName":"pid_controller_step","UseCount":4}},{"Name":"pid_controller_U","Size":8,"File":["C:\\Users\\adish\\Desktop\\repos\\cu\\cw1\\pid_controller_ert_rtw\\pid_controller.c"],"IsStatic":false,"IsBitField":false,"IsExported":true,"UseCount":3,"Members":{"Name":"ek","File":2,"Size":8,"IsStatic":false,"IsBitField":false,"IsExported":false,"UseCount":3,"Members":[],"UseInFunctions":{"FunctionName":"pid_controller_step","UseCount":3}},"UseInFunctions":{"FunctionName":"pid_controller_step","UseCount":3}},{"Name":"pid_controller_Y","Size":8,"File":["C:\\Users\\adish\\Desktop\\repos\\cu\\cw1\\pid_controller_ert_rtw\\pid_controller.c"],"IsStatic":false,"IsBitField":false,"IsExported":true,"UseCount":1,"Members":{"Name":"yk","File":2,"Size":8,"IsStatic":false,"IsBitField":false,"IsExported":false,"UseCount":1,"Members":[],"UseInFunctions":{"FunctionName":"pid_controller_step","UseCount":1}},"UseInFunctions":{"FunctionName":"pid_controller_step","UseCount":1}}],"GlobalConstInfo":[],"FcnInfo":[{"Name":"pid_controller_initialize","UniqueKey":"$pid_controller_initialize","Idx":1,"NumCommentLines":1,"NumTotalLines":4,"NumCodeLines":0,"Callee":[],"Caller":[],"Stack":0,"HasDefinition":1,"File":["C:\\Users\\adish\\Desktop\\repos\\cu\\cw1\\pid_controller_ert_rtw\\pid_controller.c"],"IsStatic":0,"Complexity":1,"StackTotal":0,"CalleeIdx":[]},{"Name":"pid_controller_step","UniqueKey":"$pid_controller_step","Idx":2,"NumCommentLines":15,"NumTotalLines":24,"NumCodeLines":4,"Callee":[],"Caller":[],"Stack":0,"HasDefinition":1,"File":["C:\\Users\\adish\\Desktop\\repos\\cu\\cw1\\pid_controller_ert_rtw\\pid_controller.c"],"IsStatic":0,"Complexity":1,"StackTotal":0,"CalleeIdx":[]},{"Name":"pid_controller_terminate","UniqueKey":"$pid_controller_terminate","Idx":3,"NumCommentLines":1,"NumTotalLines":4,"NumCodeLines":0,"Callee":[],"Caller":[],"Stack":0,"HasDefinition":1,"File":["C:\\Users\\adish\\Desktop\\repos\\cu\\cw1\\pid_controller_ert_rtw\\pid_controller.c"],"IsStatic":0,"Complexity":1,"StackTotal":0,"CalleeIdx":[]}]},"coverage":[{"id":"SimulinkCoverage","name":"Simulink Coverage","files":[]},{"id":"Bullseye","name":"Bullseye Coverage","files":[]},{"id":"LDRA","name":"LDRA Testbed","files":[]}]};