const inputBox = document.getElementById("inputBox") as HTMLInputElement;
const hyperPointElement = document.getElementById("hyperPointBase");
let basePoint: number;

inputBox.addEventListener("input", () => {
  const input = inputBox.value;
  const n = parseInt(input, 10); // Parse input as an integer

  const lastDigit = n % 10;

  if (n >= 140 && n <= 149) {
    basePoint = 3 + 3 * lastDigit;
  } else if (n >= 150 && n <= 159) {
    basePoint = 34 + 4 * lastDigit;
  } else if (n >= 160 && n <= 169) {
    basePoint = 75 + 5 * lastDigit;
  } else if (n >= 170 && n <= 179) {
    basePoint = 126 + 6 * lastDigit;
  } else if (n >= 180 && n <= 189) {
    basePoint = 187 + 7 * lastDigit;
  } else if (n >= 190 && n <= 199) {
    basePoint = 258 + 8 * lastDigit;
  } else if (n >= 200 && n <= 209) {
    basePoint = 339 + 9 * lastDigit;
  } else if (n >= 210 && n <= 219) {
    basePoint = 430 + 10 * lastDigit;
  } else if (n >= 220 && n <= 229) {
    basePoint = 531 + 11 * lastDigit;
  } else if (n >= 230 && n <= 239) {
    basePoint = 642 + 12 * lastDigit;
  } else if (n >= 240 && n <= 249) {
    basePoint = 763 + 13 * lastDigit;
  } else if (n >= 250 && n <= 259) {
    basePoint = 894 + 14 * lastDigit;
  } else if (n >= 260 && n <= 269) {
    basePoint = 1035 + 15 * lastDigit;
  } else if (n >= 270 && n <= 279) {
    basePoint = 1186 + 16 * lastDigit;
  } else if (n >= 280 && n <= 289) {
    basePoint = 1347 + 17 * lastDigit;
  } else if (n >= 290 && n <= 300) {
    basePoint = 1518 + 18 * lastDigit;
  } else {
    throw new Error("입력값이 범위를 벗어났습니다.");
  }

  if (hyperPointElement) {
    hyperPointElement.textContent = `결과: ${basePoint}`;
  }
});

// 숫자 입력란 id 배열
const inputIds: string[] = [];
for (let i = 1; i <= 17; i++) {
  inputIds.push(`numberInput${i}`);
}

// 결과 값 배열
const results: number[] = [];

// 각 입력란에 대한 처리
const statIncreaseElements: HTMLElement[] = [];

inputIds.forEach((inputId, index) => {
  const inputElement = document.getElementById(inputId) as HTMLInputElement;

  inputElement.addEventListener("input", () => {
    let inputValue = parseInt(inputElement.value, 10);

    

    // 입력이 음수일 경우 0으로 고정
    // 입력이 양수일 경우 최댓값을 15로 제한
    
    if (inputElement.id === "numberInput7") {
        if (inputValue < 0) {
          inputValue = 0;
          inputElement.value = "0";
        } else if (inputValue > 10) {
          inputValue = 10;
          inputElement.value = "10";
        }
      } else {
        if (inputValue < 0) {
          inputValue = 0;
          inputElement.value = "0";
        } else if (inputValue > 15) {
          inputValue = 15;
          inputElement.value = "15";
        }
      }
      



    // 수정된 inputValue를 해당 인덱스에 저장
    results[index] = inputValue;

    // increasedStat 배열 계산
    const increasedStat: number[] = [];
    for (let i = 0; i < results.length; i++) {
      const value = results[i];
      let point = 0;

      if (i >= 0 && i <= 3) {
        point = value * 30;
      } else if (i >= 4 && i <= 5) {
        point = value * 2;
      } else if (i === 6) {
        point = value * 10;
      } else if (i === 7) {
        if (value <= 5) {
          point = value;
        } else if (value <= 15) {
          point = (value - 5) * 2 + 5;
        }
      } else if (i === 8) {
        point = value;
      } else if (i === 9) {
        point = value * 3;
      } else if (i === 10) {
        point = value * 3;
      } else if (i >= 11 && i <= 12) {
        if (value <= 5) {
          point = value * 3;
        } else if (value <= 15) {
          point = (value - 5) * 4 + 15;
        }
      } else if (i === 13) {
        if (value <= 5) {
          point = value;
        } else if (value <= 15) {
          point = (value - 5) * 2 + 5;
        }
      } else if (i === 14) {
        point = value * 3;
      } else if (i === 15) {
        if (value <= 10) {
          point = value * 0.5;
        } else if (value <= 15) {
          point = (value - 10) * 1 + 5;
        }
      } else if (i === 16) {
        if (value <= 10) {
          point = value * 5;
        } else if (value <= 15) {
          point = (value - 10) * 10 + 50;
        }
      }

      increasedStat.push(point);
    }

        const usedPoint = [];

        for (let i = 0; i < results.length; i++) {
        const value = results[i];
        let point = 0;

        if (value === 1) {
            point = 1;
        } else if (value === 2) {
            point = 3;
        } else if (value === 3) {
            point = 7;
        } else if (value === 4) {
            point = 15;
        } else if (value === 5) {
            point = 25;
        } else if (value === 6) {
            point = 40;
        } else if (value === 7) {
            point = 60;
        } else if (value === 8) {
            point = 85;
        } else if (value === 9) {
            point = 115;
        } else if (value === 10) {
            point = 150;
        } else if (value === 11) {
            point = 200;
        } else if (value === 12) {
            point = 265;
        } else if (value === 13) {
            point = 345;
        } else if (value === 14) {
            point = 440;
        } else if (value === 15) {
            point = 550;
        }

        usedPoint.push(point);
        }

    const usedPointSum = usedPoint.reduce((total, point) => total + point, 0);
    const remainingPoint = basePoint - usedPointSum;

    const remainElement = document.getElementById("remain");
        if (remainElement) {
        remainElement.textContent = remainingPoint.toString();
        }


    // 증가한 스탯 출력
    if (statIncreaseElements[index]) {
      statIncreaseElements[index].textContent = increasedStat[index].toString();
    }
  });

  // 스탯 테이블에서 증가한 스탯 셀 요소들을 가져와서 statIncreaseElements 배열에 저장
  const statIncreaseElement = document.getElementById(`statIncrease${index + 1}`);
  if (statIncreaseElement) {
    statIncreaseElements.push(statIncreaseElement);
  }
});
