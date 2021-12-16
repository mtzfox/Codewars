/*
    At least six characters long
    contains a lowercase letter
    contains an uppercase letter
    contains a number
*/

/* Failed attempts */
(?:[A-Za-z0-9]+[._]?){6,}[A-Za-z0-9]+\@(?:(?:[A-Za-z0-9]+[-]?){6,}[A-Za-z0-9]+\.){1,3}

((?:[a-z]?)(?:[A-Z]?)(?:[0-9]?)){6,}


^((?:[a-z]?[A-Z]?[0-9]?)+([a-zA-z0-9])){6,}$


^\w(([a-z][A-Z][0-9])*?([a-zA-Z0-9])){6,}


^([a-z]+[A-Z]+[0-9]+)*([a-zA-Z0-9]+){6,}

^([a-z]+[A-Z]+[0-9]+)*[a-zA-Z0-9]{6,}


(?:[A-Za-z0-9]+[._]?){6,}

[A-Za-z0-9]+\@(?:(?:[A-Za-z0-9]+[-]?){6,}

(?:[A-Za-z0-9]+[.a-b]?){6,}




match(([A-Z]+[^a-z]+[0-9]+),([A-Za-z0-9]+)){6,}

match(([A-Z]+[a-z]+[0-9]+),([A-Za-z0-9]+)){6,}


// Discovered Lookahead
(?=[A-Z]{1})(?![a-z]+)(?![0-9]+){?=,}

(?=[a-z]?)(?=[A-Z]?){?}
function validate(password) {
    let uppercase = [A-Z]
    let lowercase = [a-z]
    let num = [0-9]
    return password/([uppercase]+[lowercase]+[num]){6,}/.test(password);
  }

/* A is needed here to anchor the text  */
\A(?=\w{6,10}\z)(?=[^a-z]*[a-z])     (?=[^a-z]*[a-z])

// Look ahead needs two parts - opening and closing
(?=[^a-z]*[a-z])     (?=[^a-z]*[a-z])


// There is also 'Atomic' and 'Posessive' lookaheads
//atomic 
(?>[^a-z]*)[a-z]

//possessive
[^a-z]*+[a-z]



//Starting with a lookahead:
(?=[^a-z]*[a-z])

// We add to the opening line
\A(?=\w{6,10}\z)(?=[^a-z]*[a-z])



// Broken down parts of a lookahead
\A(?=\w{6,10}\z)(?=[^a-z]*[a-z])(?=(?:[^A-Z]*[A-Z]){3})\D*\d.*\z

// Broken apart 
\A(?=\w{6,10}\z) // Anchor
(?=[^a-z]*[a-z]) // first lookahead
(?=(?:[^A-Z]*[A-Z]){3}) //uppercase
\D*\d.*\z // get to end of string



// Close to a solution
(?=.*[\d])(?=.*[a-z])(?=.*[A-Z]).{6,}

// Best answer so far that almost works. Matching but will fail every other test.
(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,})



/* ---- ANSWERS ---- */
//Minimum eight characters, at least one letter and one number:

^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$
//broken down
^(?=.*[A-Za-z])
(?=.*\d)
[A-Za-z\d]
{8,}$



//Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$

//broken down
^(?=.*[a-z])
(?=.*[A-Z])
(?=.*\d)
(?=.*[@$!%*?&])
[A-Za-z\d@$!%*?&]
{8,}$


//Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$

// broken down
^(?=.*[a-z])
(?=.*[A-Z])
(?=.*\d)
[a-zA-Z\d]
{8,}$


Minimum eight characters, at least one letter, one number and one special character:
^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$

// broken down
^(?=.*[A-Za-z])
(?=.*\d)
(?=.*[@$!%*#?&])
[A-Za-z\d@$!%*#?&]
{8,}$
