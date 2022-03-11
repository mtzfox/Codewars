// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

function rgb(r, g, b){
    const getBase16 = function(val) {
      if (val < 0) val = 0;
      if (val > 255) val = 255;
      val = val.toString(16)
      return val.length == 1 ? ("0" + val) : val
    }
    return (getBase16(r) + getBase16(g) + getBase16(b)).toUpperCase()
  }