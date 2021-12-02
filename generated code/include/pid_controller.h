/*
 * Academic License - for use in teaching, academic research, and meeting
 * course requirements at degree granting institutions only.  Not for
 * government, commercial, or other organizational use.
 *
 * File: pid_controller.h
 *
 * Code generated for Simulink model 'pid_controller'.
 *
 * Model version                  : 1.84
 * Simulink Coder version         : 9.6 (R2021b) 14-May-2021
 * C/C++ source code generated on : Thu Dec  2 18:26:00 2021
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. RAM efficiency
 *    2. Execution efficiency
 *    3. Polyspace
 *    4. MISRA C:2012 guidelines
 *    5. Traceability
 *    6. Safety precaution
 * Validation result: Not run
 */

#ifndef RTW_HEADER_pid_controller_h_
#define RTW_HEADER_pid_controller_h_
#ifndef pid_controller_COMMON_INCLUDES_
#define pid_controller_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* pid_controller_COMMON_INCLUDES_ */

#include "pid_controller_types.h"

/* Macros for accessing real-time model data structure */

/* Block signals and states (default storage) for system '<Root>' */
typedef struct {
  real_T UnitDelay1_DSTATE;            /* '<Root>/Unit Delay 1' */
  real_T UnitDelay2_DSTATE;            /* '<Root>/Unit Delay 2' */
} DW_pid_controller_T;

/* External inputs (root inport signals with default storage) */
typedef struct {
  real_T ek;                           /* '<Root>/e(k)' */
} ExtU_pid_controller_T;

/* External outputs (root outports fed by signals with default storage) */
typedef struct {
  real_T yk;                           /* '<Root>/y(k)' */
} ExtY_pid_controller_T;

/* Block signals and states (default storage) */
extern DW_pid_controller_T pid_controller_DW;

/* External inputs (root inport signals with default storage) */
extern ExtU_pid_controller_T pid_controller_U;

/* External outputs (root outports fed by signals with default storage) */
extern ExtY_pid_controller_T pid_controller_Y;

/* Model entry point functions */
extern void pid_controller_initialize(void);
extern void pid_controller_step(void);
extern void pid_controller_terminate(void);

/*-
 * The generated code includes comments that allow you to trace directly
 * back to the appropriate location in the model.  The basic format
 * is <system>/block_name, where system is the system number (uniquely
 * assigned by Simulink) and block_name is the name of the block.
 *
 * Use the MATLAB hilite_system command to trace the generated code back
 * to the model.  For example,
 *
 * hilite_system('<S3>')    - opens system 3
 * hilite_system('<S3>/Kp') - opens and selects block Kp which resides in S3
 *
 * Here is the system hierarchy for this model
 *
 * '<Root>' : 'pid_controller'
 */

/*-
 * Requirements for '<Root>': pid_controller
 */
#endif                                 /* RTW_HEADER_pid_controller_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
