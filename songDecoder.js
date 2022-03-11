function songDecoder(song) {
    let str = song
    const replacer = (string, match) => { 
      return [' '].join('');
    }
    str = str.replace(/WUB/g, replacer)
    str = str.replace(/   /g, replacer)
    str = str.replace(/  /g, replacer)
    
    return str.trim('');
  }