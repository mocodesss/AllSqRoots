let num = 100; 
 
for (let i = 1; i <= num; i++) { 
  let sqRoot = Math.sqrt(i); 
  if (Math.floor(sqRoot) !== sqRoot) { 
    continue; 
  } 
 
  console.log(sqRoot);
} 
