function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/e(k) */
	this.urlHashMap["pid_controller:2"] = "pid_controller.c:43,46,50,56,57,61,63&pid_controller.h:45";
	/* <Root>/1 over Ts */
	this.urlHashMap["pid_controller:17"] = "pid_controller.c:49,57";
	/* <Root>/Add Block 1 */
	this.urlHashMap["pid_controller:9"] = "pid_controller.c:41,46";
	/* <Root>/Add Block 2 */
	this.urlHashMap["pid_controller:18"] = "pid_controller.c:51,56,57";
	/* <Root>/Add Block 3 */
	this.urlHashMap["pid_controller:6"] = "pid_controller.c:52,57,58";
	/* <Root>/Kd */
	this.urlHashMap["pid_controller:20"] = "msg=rtwMsg_reducedBlock&block=pid_controller:20";
	/* <Root>/Ki */
	this.urlHashMap["pid_controller:8"] = "msg=rtwMsg_reducedBlock&block=pid_controller:8";
	/* <Root>/Kp */
	this.urlHashMap["pid_controller:4"] = "msg=rtwMsg_reducedBlock&block=pid_controller:4";
	/* <Root>/Ts */
	this.urlHashMap["pid_controller:12"] = "pid_controller.c:42,46";
	/* <Root>/Unit Delay 1 */
	this.urlHashMap["pid_controller:42"] = "pid_controller.c:44,46,53,58&pid_controller.h:39";
	/* <Root>/Unit Delay 2 */
	this.urlHashMap["pid_controller:41"] = "pid_controller.c:54,57,60,63&pid_controller.h:40";
	/* <Root>/y(k) */
	this.urlHashMap["pid_controller:3"] = "pid_controller.c:48,56&pid_controller.h:50";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "pid_controller"};
	this.sidHashMap["pid_controller"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<Root>/e(k)"] = {sid: "pid_controller:2"};
	this.sidHashMap["pid_controller:2"] = {rtwname: "<Root>/e(k)"};
	this.rtwnameHashMap["<Root>/1 over Ts"] = {sid: "pid_controller:17"};
	this.sidHashMap["pid_controller:17"] = {rtwname: "<Root>/1 over Ts"};
	this.rtwnameHashMap["<Root>/Add Block 1"] = {sid: "pid_controller:9"};
	this.sidHashMap["pid_controller:9"] = {rtwname: "<Root>/Add Block 1"};
	this.rtwnameHashMap["<Root>/Add Block 2"] = {sid: "pid_controller:18"};
	this.sidHashMap["pid_controller:18"] = {rtwname: "<Root>/Add Block 2"};
	this.rtwnameHashMap["<Root>/Add Block 3"] = {sid: "pid_controller:6"};
	this.sidHashMap["pid_controller:6"] = {rtwname: "<Root>/Add Block 3"};
	this.rtwnameHashMap["<Root>/Kd"] = {sid: "pid_controller:20"};
	this.sidHashMap["pid_controller:20"] = {rtwname: "<Root>/Kd"};
	this.rtwnameHashMap["<Root>/Ki"] = {sid: "pid_controller:8"};
	this.sidHashMap["pid_controller:8"] = {rtwname: "<Root>/Ki"};
	this.rtwnameHashMap["<Root>/Kp"] = {sid: "pid_controller:4"};
	this.sidHashMap["pid_controller:4"] = {rtwname: "<Root>/Kp"};
	this.rtwnameHashMap["<Root>/Ts"] = {sid: "pid_controller:12"};
	this.sidHashMap["pid_controller:12"] = {rtwname: "<Root>/Ts"};
	this.rtwnameHashMap["<Root>/Unit Delay 1"] = {sid: "pid_controller:42"};
	this.sidHashMap["pid_controller:42"] = {rtwname: "<Root>/Unit Delay 1"};
	this.rtwnameHashMap["<Root>/Unit Delay 2"] = {sid: "pid_controller:41"};
	this.sidHashMap["pid_controller:41"] = {rtwname: "<Root>/Unit Delay 2"};
	this.rtwnameHashMap["<Root>/y(k)"] = {sid: "pid_controller:3"};
	this.sidHashMap["pid_controller:3"] = {rtwname: "<Root>/y(k)"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
