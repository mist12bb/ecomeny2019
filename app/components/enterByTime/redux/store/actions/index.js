export function on_set_entr_num(num) {
  return {
    type: "DAILY_ENTER",
    num
  }
};
  
export function on_set_entr_mountly(num) {
  return {
    type: "MOUNTLY_ENTRINGS",
     num
  }
}

export function on_add_daily(bool) {
  return {
    type: "DAILY_ADDED",
    bool
  }
} 