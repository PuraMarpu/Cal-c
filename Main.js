let Input = document.getElementById('input');
let button_Query = document.querySelectorAll('button')

let INPUTvalue = [] , result;

for ( let i of button_Query ) {

    i.addEventListener("click", e => {
        let button_value = e.target.innerText;

        if(button_value === 'C'){
            INPUTvalue = '';
            Input.value = INPUTvalue;
        }
        else if (button_value === '='){
            Input.value = eval(INPUTvalue);
            //console.log(INPUTvalue);
        }
        else if ( button_value === 'E' ){
            result = [...INPUTvalue.slice(0, INPUTvalue.length -1)];

            Input.value = result.join('');

            //Input.value += result
            Input.value = [...result];
            console.log(result)
        }
        else {
            INPUTvalue += button_value;

            Input.value = INPUTvalue;
        }
    })
}