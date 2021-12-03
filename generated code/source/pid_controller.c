/*
 * Academic License - for use in teaching, academic research, and meeting
 * course requirements at degree granting institutions only.  Not for
 * government, commercial, or other organizational use.
 *
 * File: pid_controller.c
 *
 * Code generated for Simulink model 'pid_controller'.
 *
 * Model version                  : 1.85
 * Simulink Coder version         : 9.6 (R2021b) 14-May-2021
 * C/C++ source code generated on : Fri Dec  3 22:07:36 2021
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

#include "pid_controller.h"
#include "pid_controller_private.h"

/* Block signals and states (default storage) */
DW_pid_controller_T pid_controller_DW;

/* External inputs (root inport signals with default storage) */
ExtU_pid_controller_T pid_controller_U;

/* External outputs (root outports fed by signals with default storage) */
ExtY_pid_controller_T pid_controller_Y;

/* Model step function */
void pid_controller_step(void)
{
  /* Sum: '<Root>/Add Block 1' incorporates:
   *  Gain: '<Root>/Ts'
   *  Inport: '<Root>/e(k)'
   *  UnitDelay: '<Root>/Unit Delay 1'
   */
  pid_controller_DW.UnitDelay1_DSTATE += 0.01 * pid_controller_U.ek;

  /* Outport: '<Root>/y(k)' incorporates:
   *  Gain: '<Root>/1 over Ts'
   *  Inport: '<Root>/e(k)'
   *  Sum: '<Root>/Add Block 2'
   *  Sum: '<Root>/Add Block 3'
   *  UnitDelay: '<Root>/Unit Delay 1'
   *  UnitDelay: '<Root>/Unit Delay 2'
   */
  pid_controller_Y.yk = ((pid_controller_U.ek -
    pid_controller_DW.UnitDelay2_DSTATE) * 100.0) + (pid_controller_U.ek +
    pid_controller_DW.UnitDelay1_DSTATE);

  /* Update for UnitDelay: '<Root>/Unit Delay 2' incorporates:
   *  Inport: '<Root>/e(k)'
   */
  pid_controller_DW.UnitDelay2_DSTATE = pid_controller_U.ek;
}

/* Model initialize function */
void pid_controller_initialize(void)
{
  /* (no initialization code required) */
}

/* Model terminate function */
void pid_controller_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
