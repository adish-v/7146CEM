function RTW_SidParentMap() {
    this.sidParentMap = new Array();
    this.sidParentMap["pid_controller:2"] = "pid_controller";
    this.sidParentMap["pid_controller:17"] = "pid_controller";
    this.sidParentMap["pid_controller:9"] = "pid_controller";
    this.sidParentMap["pid_controller:18"] = "pid_controller";
    this.sidParentMap["pid_controller:6"] = "pid_controller";
    this.sidParentMap["pid_controller:20"] = "pid_controller";
    this.sidParentMap["pid_controller:8"] = "pid_controller";
    this.sidParentMap["pid_controller:4"] = "pid_controller";
    this.sidParentMap["pid_controller:12"] = "pid_controller";
    this.sidParentMap["pid_controller:42"] = "pid_controller";
    this.sidParentMap["pid_controller:41"] = "pid_controller";
    this.sidParentMap["pid_controller:3"] = "pid_controller";
    this.getParentSid = function(sid) { return this.sidParentMap[sid];}
}
    RTW_SidParentMap.instance = new RTW_SidParentMap();
