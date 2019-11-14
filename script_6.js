prot1="CCGUCGUUGCGCUACAGC"
tab2 = []
chain1=""
chain2=""
prot2="CCUCGCCGGUACUUCUCG"

    tab1 = prot1.split("",12)
console.log(tab1)
i = 1
  for (let x = 0 ; x < tab1.length; x++){
    chain1 += tab1[x]
    if (i % 3 == 0 && i != 12){
    chain1 += "-"
    }
    i++
  }
console.log(chain1)
result1 = []
result1 = chain1.split("-")
console.log(result1)

console.log(result1.length)
  for (let x = 0 ; x < result1.length; x++){
    if (result1[x] == "UAU" || result1[x] == "UAC")
{    result1[x] = "Tyrosine"
    console.log(result1[x])}
    if ((result1[x] == "UUU" || result1[x] == "UUC"))
{    result1[x] = "Phénylalanine"
    console.log(result1[x])}
    if ((result1[x] == "UUA" || result1[x] == "UUG"))
{    result1[x] = "Leucine"
    console.log(result1[x])}
    if ((result1[x] == "CCU" || result1[x] == "CCC" || result1[x] == "CCA" || result1[x] == "CCG" ))
{    result1[x] = "Proline"
    console.log(result1[x])}
    if ((result1[x] == "UCU" || result1[x] == "UCC" || result1[x] == "UCA" || result1[x] == "UCG" || result1[x] == "AGU" || result1[x] == "AGC"))
{    result1[x] = "Sérine"
    console.log(result1[x])}
    if((result1[x] == "CGU" || result1[x] == "CGC" || result1[x] == "CGA" || result1[x] == "CGG" || result1[x] == "AGA" ||result1[x] == "AGG" ))
{    result1[x] = "Arginine"
  console.log(result1[x])}
}
console.log(result1.join("-"))




    tab2 = prot2.split("",12)
console.log(tab2)
i = 1
  for (let x = 0 ; x < tab2.length; x++){
    chain2 += tab2[x]
    if (i % 3 == 0 && i != 12){
    chain2 += "-"
    }
    i++
  }
console.log(chain2)
result2 = []
result2 = chain2.split("-")
console.log(result2)

console.log(result2.length)
  for (let x = 0 ; x < result2.length; x++){
    if (result2[x] == "UAU" || result2[x] == "UAC")
{    result2[x] = "Tyrosine"
    console.log(result2[x])}
    if ((result2[x] == "UUU" || result2[x] == "UUC"))
{    result2[x] = "Phénylalanine"
    console.log(result2[x])}
    if ((result2[x] == "UUA" || result2[x] == "UUG"))
{    result2[x] = "Leucine"
    console.log(result2[x])}
    if ((result2[x] == "CCU" || result2[x] == "CCC" || result2[x] == "CCA" || result2[x] == "CCG" ))
{    result2[x] = "Proline"
    console.log(result2[x])}
    if ((result2[x] == "UCU" || result2[x] == "UCC" || result2[x] == "UCA" || result2[x] == "UCG" || result2[x] == "AGU" || result2[x] == "AGC"))
{    result2[x] = "Sérine"
    console.log(result2[x])}
    if((result2[x] == "CGU" || result2[x] == "CGC" || result2[x] == "CGA" || result2[x] == "CGG" || result2[x] == "AGA" ||result2[x] == "AGG" ))
{    result2[x] = "Arginine"
  console.log(result2[x])}
}
console.log(result2.join("-"))
