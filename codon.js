/*
#  file name: codon.js
#  Date Created: 2025.12.12.
#  purpose:
reduce를 배우고 이렇게 활용 가능하지 않을까 싶어서
얼렁뚱땅 만들기 시작한 DNA -> Amino Acid 프로그램(?) 
Transcription, Translation은 능력이 되는 대로 구현하려함.
일단 이게 가능한지 궁금했음.

#피드백 모음
- 함수 이름은 기능이 명확하게 드러나도록(동사 시작, 유추 어려운 준말 지양.)
- includes 메소드 활용
- T/F를 받아 if에 바로 적용할 수 있는 변수 활용
*/

const codons = ['AGT', 'CGA', 'TTA', 'GCC', 'GTA'];

function dnaToAminoAcid(codon) {
  const isSerine = ['AGT', 'AGC'].includes(codon);
  const isValine = ['GTA', 'GTC', 'GTT', 'GTG'].includes(codon);
  const isAlanine = ['GCC', 'GCA', 'GCT', 'GCG'].includes(codon);
  const isArginine = ['CGA', 'CGG', 'CGT', 'CGC', 'AGA', 'AGG'].includes(codon);
  const isLeucine = ['TTA', 'TTG', 'CTT', 'CTC', 'CTA', 'CTG'].includes(codon);

  if (isSerine) {
    return 'Ser';
  }

  if (isArginine) {
    return 'Arg';
  }

  if (isLeucine) {
    return 'Leu';
  }

  if (isAlanine) {
    return 'Ala';
  }

  if (isValine) {
    return 'Val';
  }
}

const aminoAcid = codons.reduce((acc, cur) => {
  console.log(cur);
  return `${acc}-${dnaToAminoAcid(cur)}`;
}, '');
console.log(aminoAcid);
