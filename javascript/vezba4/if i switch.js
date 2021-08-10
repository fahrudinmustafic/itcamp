var razred=1;
switch (razred){

  case 1:
    console.log("Učenik pohađa prvi razred i");
    break;

  case 2:
    console.log ("vi ste drugi  razred")
   break;
  case 3:
    console.log("vi ste treci razred");
 break;
  case 4:
    console.log("vi ste cetvrti razred");
   break;



}
if(razred>=1 && razred<=4){

  console.log("pripada kategoriji nižih razreda, prema tome dobiće poklon komplet knjiga za prvi razred od ministarstva prosvete.")
}

else{
 console.log( "Vi spadate u starije razrede i nećete dobiti besplatne udžbenike");
}


