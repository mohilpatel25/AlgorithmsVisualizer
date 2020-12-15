function load(){
  bubble_generate();
  insert_generate();
}

//=========================================bubble sort=============================================================================
function bubble_generate(count=50){
  document.getElementById('bubble_chart').style.gridTemplateColumns= `repeat(${count}, 1fr)`;
  var bars = "";
  for(let i=0;i<count;i++){
    bars += "<div id='bubble_bar_"+i+"' class='bars'></div>\n";
  }
  document.getElementById('bubble_chart').innerHTML = "";
  document.getElementById('bubble_chart').innerHTML = bars;
  for(let i=0;i<count;i++){
    let h = Math.floor(Math.random() * 90) + 2;
    document.getElementById('bubble_bar_'+i).style.gridRowStart = `${h}`;
  }
}

async function bubble_sort(count){
  document.getElementById('bubble_slider').disabled = true;
  document.getElementById('bubble_generate_button').disabled = true;
  document.getElementById('bubble_sort_button').disabled = true;
  
  for(let i=0;i<count;i++){
    for(let j=0;j<count-i-1;j++){
      let bar1 = document.getElementById('bubble_bar_'+j)
      let bar2 = document.getElementById('bubble_bar_'+(j+1));
      bar1.style.backgroundColor = "#DC143C";
      bar2.style.backgroundColor = "#DC143C";
      let v1 = parseInt(bar1.style.gridRowStart);
      let v2 = parseInt(bar2.style.gridRowStart);
      await sleep(10);
      if(v1 < v2){
        bar1.style.gridRowStart = `${v2}`;
        bar2.style.gridRowStart = `${v1}`;
      }
      bar1.style.backgroundColor = "#4B0082";
      bar2.style.backgroundColor = "#4B0082";
    }
  }

  document.getElementById('bubble_slider').disabled = false;
  document.getElementById('bubble_generate_button').disabled = false;
  document.getElementById('bubble_sort_button').disabled = false;
}

//=========================================insertion sort=============================================================================
function insert_generate(count=50){
  document.getElementById('insert_chart').style.gridTemplateColumns= `repeat(${count}, 1fr)`;
  var bars = "";
  for(let i=0;i<count;i++){
    bars += "<div id='insert_bar_"+i+"' class='bars'></div>\n";
  }
  document.getElementById('insert_chart').innerHTML = "";
  document.getElementById('insert_chart').innerHTML = bars;
  for(let i=0;i<count;i++){
    let h = Math.floor(Math.random() * 90) + 2;
    document.getElementById('insert_bar_'+i).style.gridRowStart = `${h}`;
  }
}

async function insert_sort(count){
  document.getElementById('insert_slider').disabled = true;
  document.getElementById('insert_generate_button').disabled = true;
  document.getElementById('insert_sort_button').disabled = true;
  
  for(let i=0;i<count;i++){
    let bar1 = document.getElementById('insert_bar_'+i)
    bar1.style.backgroundColor = "#DC143C";
    let v1 = parseInt(bar1.style.gridRowStart);
    let minval = v1, minind = i;
    for(let j=i;j<count;j++){
      let bar2 = document.getElementById('insert_bar_'+j)
      bar2.style.backgroundColor = "#DC143C";
      let v2 = parseInt(bar2.style.gridRowStart);
      await sleep(10);
      if(minval < v2){
        minind = j;
        minval = v2;
      }
      bar2.style.backgroundColor = "#4B0082";
    }
    bar1.style.gridRowStart = minval;
    document.getElementById('insert_bar_'+minind).style.gridRowStart = v1;
    bar1.style.backgroundColor = "#4B0082";
  }

  document.getElementById('insert_slider').disabled = false;
  document.getElementById('insert_generate_button').disabled = false;
  document.getElementById('insert_sort_button').disabled = false;
}

//sleep function
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}