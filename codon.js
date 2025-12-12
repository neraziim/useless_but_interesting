/*
#  file name: codon.js
#  Date Created: 2025.12.12.
#  purpose:
reduce를 배우고 이렇게 활용 가능하지 않을까 싶어서
얼렁뚱땅 만들기 시작한 DNA -> Amino Acid 프로그램(?) 
Transcription, Translation은 능력이 되는 대로 구현하려함.
일단 이게 가능한지 궁금했음.

*/

/* 초기 코드
// const gene1 = ["AGT", "CGA", "TTA", "GCC", "GTA"].reduce((acc, cur) => {console.log(acc); return acc+cur;}, "")
// console.log(gene1)

const codons = ['AGT', 'CGA', 'TTA', 'GCC', 'GTA'];

function DNAtoAA(codon) {
   if (codon === ("AGT" || "AGC")) {
    return 'Ser';
  }

  if (codon === ('CGA' || 'CGG' || 'CGT' || 'CGC')) {
    return 'Arg';
  }

  if (codon === ('TTA' || 'TTG')) {
    return 'Leu';
  }

  if (codon === ('GCC' || 'GCA' || 'GCT' || 'GCG')) {
    return 'Ala';
  }

  if (codon === ('GTA' || 'GTC' || 'GTT')) {
    return 'Val';
  }
}

const AA = codons.reduce((acc, cur) => {
  console.log(cur);
  return `${acc}-${DNAtoAA(cur)}`;
}, '');
console.log(AA);
*/

const codons = ['AGT', 'CGA', 'TTA', 'GCC', 'GTA'];
//강사님 피드백1: 함수 이름을 기능이 명확하게 드러나도록 지으라고 추천하심
//(동사 시작, 의미를 유추하기 어려운 줄임말 지양.)
function dnaToAminoAcid(codon) {
  //강사님 피드백3: T/F를 받아 if에 바로 적용할 수 있는 변수 활용해보라고 하심.
  const isSerine = ['AGT', 'AGC'].includes(codon);
  if (isSerine) {
    return 'Ser';
  }
  //강사님 피드백2: includes 메소드 활용해보라고 하심.
  if (['CGA', 'CGG', 'CGT', 'CGC'].includes(codon)) {
    return 'Arg';
  }

  if (codon === ('TTA' || 'TTG')) {
    return 'Leu';
  }

  if (codon === ('GCC' || 'GCA' || 'GCT' || 'GCG')) {
    return 'Ala';
  }

  if (codon === ('GTA' || 'GTC' || 'GTT')) {
    return 'Val';
  }
}

const aminoAcid = codons.reduce((acc, cur) => {
  console.log(cur);
  return `${acc}-${dnaToAminoAcid(cur)}`;
}, '');
console.log(aminoAcid);
