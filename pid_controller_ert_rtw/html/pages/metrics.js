function CodeMetrics() {
	 this.metricsArray = {};
	 this.metricsArray.var = new Array();
	 this.metricsArray.fcn = new Array();
	 this.metricsArray.var["pid_controller_DW"] = {file: "C:\\Users\\adish\\Desktop\\repos\\cu\\cw1\\pid_controller_ert_rtw\\pid_controller.c",
	size: 16};
	 this.metricsArray.var["pid_controller_U"] = {file: "C:\\Users\\adish\\Desktop\\repos\\cu\\cw1\\pid_controller_ert_rtw\\pid_controller.c",
	size: 8};
	 this.metricsArray.var["pid_controller_Y"] = {file: "C:\\Users\\adish\\Desktop\\repos\\cu\\cw1\\pid_controller_ert_rtw\\pid_controller.c",
	size: 8};
	 this.metricsArray.fcn["pid_controller_initialize"] = {file: "C:\\Users\\adish\\Desktop\\repos\\cu\\cw1\\pid_controller_ert_rtw\\pid_controller.c",
	stack: 0,
	stackTotal: 0};
	 this.metricsArray.fcn["pid_controller_step"] = {file: "C:\\Users\\adish\\Desktop\\repos\\cu\\cw1\\pid_controller_ert_rtw\\pid_controller.c",
	stack: 0,
	stackTotal: 0};
	 this.metricsArray.fcn["pid_controller_terminate"] = {file: "C:\\Users\\adish\\Desktop\\repos\\cu\\cw1\\pid_controller_ert_rtw\\pid_controller.c",
	stack: 0,
	stackTotal: 0};
	 this.getMetrics = function(token) { 
		 var data;
		 data = this.metricsArray.var[token];
		 if (!data) {
			 data = this.metricsArray.fcn[token];
			 if (data) data.type = "fcn";
		 } else { 
			 data.type = "var";
		 }
	 return data; }; 
	 this.codeMetricsSummary = '<a href="javascript:void(0)" onclick="return postParentWindowMessage({message:\'gotoReportPage\', pageName:\'pid_controller_metrics\'});">Global Memory: 32(bytes) Maximum Stack: 0(bytes)</a>';
	}
CodeMetrics.instance = new CodeMetrics();
