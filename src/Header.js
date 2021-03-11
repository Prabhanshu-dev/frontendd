import React from "react";
import {
    BrowserRouter as Router,
    Route,
    useHistory,
} from "react-router-dom";



import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
    let history = useHistory();
    function handleClick() {
        history.push("/");
    }

    let history1 = useHistory();
    function handleClick1() {
        history1.push("/page1");
    }
    let history2 = useHistory();
    function handleClick2() {
        history2.push("/page2");
    }

    let history3 = useHistory();
    function handleClick3() {
        history3.push("/page3");
    }
    return (
        <div className='header'>
            <img
                className="header__logo"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQIAAADECAMAAABDV99/AAAAkFBMVEXZAADYAADXAAD/5gD/4wD/5QD/4gD/6AD/4AD/1wD/3QD/3ADUAAD/1AD6vwD/2AD+zwD7xQD9zADwlAD5uwD3sQD4tgD8yAD0pQDyngDsgAD1qQDxmQDuiQDjUgDobQDmZADqdwDhRADdKgDpcgDkWADsgQDfOwDvkADiTgDlXwDcIwDkVwDnaADuiwDhRwCF63lpAAAdVklEQVR4nO1dh3bbuBIFRmITi9h7AzsJkfr/v3sDysluirN2LCeOXu7JiX3shCIHU+4UgIT8xV/8xV/8xV/8xV/8xYcBBaAIoL/7Rn4L8OkJ6fJ4LYYlXyiB331Dvxx0DrLQzpzOiiuntAMr/v/ThHMykLG/0oqTfixXkJv/NxlQG2p2YVsS9J2XL20Vbv83pkBviw1RNdQRmwkllFdFVdSn33xjvwgUeDfuqw1hTytohhFFQLp5cahJn/4JPLI6wDwovj2ISHgJswLWnEUog3Culqm8aQFUljPRh3ULkDhJaRDFSq7gtG3A4zadAiOoPbaMJLAAVSDLWu7Z7YPKALq4xfAPHk+tyaa0adm1dSZgC7127Qo6J1VsGagCWfSYIqBEGww6UspY76XnueKUJLG9ALWjHMAjjmkt7IIPz0m2PCJhpBebx/HCr1BRXPh8KixC/MmSLC1JK9rrjRoDv8xUCMuy0ubhHAIPO06hUeeOJGj49bIMZrbVwzC521JV2SkzYlLkrXh01yZksp32d9/zfUG3S36ldI6bacyqMC0cDhnLWBqkfGn6ccuvEE6EZxa0k0VFylBljxUcIcvjZCwzi6GzI0ZxzUlwGmNMkZZwrC9dl5SQr2net4nL4/JCaBDnDyUCusTQGUCNMOpHK7uOsx9f4otUtMx2orRKkpmQICdG0jKI7Twf0tbzfvdd3xN0zMjcr4yOxQJ5zMPZDwEWYmpxREhvew7dOAvKJJvOQd9jfIAu68rggdQAcl6GaeIEl9zNRzT1oDUTqIJrxzFCLvXYWKfaKmxmGFuYcAtjgRGPsKaPExTQ81VkdpEZxzzZeJaWee4nnaxvIy1ZSlmkOqOzem1m5caYqFHqZ80QE/9x1IA2TnFJs3qAImlybrAst6MREleuSWdUPD/5C80NMyz7atBr1jIvSNnFXR9HCwjUZlJkCRunpKi78MJHJvtAB1U3de1s6ue55cHa5AY757ExEObGrIqSx1ECBDRBm1Y5+Ea6knUa6lE98nS1IvWkq6fzlBMzuZKi6PLQKPJkuSa55T2UBFAGxVqnbNYSJMUV2sMqu5ZdkqocrGtdkdg66ZwdMvBHU8nI1jVV/2ASQH/gJsZy9H2Gnr4MSOCTk+oaiTGHhF75WQ6cLtkMJ9v8VrZIGcQPJwHMfbLixGY2FgUEbLGGzB1kx7Y8J3F8OeyiaQI3NhqFBUGd0+yBPOFn0Nlri7QNhrqNebYeQ2NyIPeY1jt57kxR59dTUGazl2apY/3uu30fUADbGpaKZn47aYPlKrxEGqBcW4ukPhmLqVF6I3ci5hiPZwU30OUMy+avbVN166ZhgnRoe9PLL4teF2WWe0GbsIGfJvORCMGXOE9xlRtrYpWOdiyJm1tztgBYTTGaQwh64vmMmFUsPaoIaCsZBUTeNbpmiRfMcgG2Q0Z/bJOg7fs0k1PkhnNCg+CREqR/g9ZSUGdVDO41zipXd6vYpoUcRzW/BNR0xqAb1WvcOk3uPqgIoMitJljBUmuzMO2E6FlAsuVilBlrowsS6DxhteN4TZ48qiGk/tgH5ujVhRN2CbFcUoQlz7NlWtfFvkwxSVoHrWLhNv/dN/s+AM8J4nSs/aQwg0rOpI7bA3XaOh/X2i30sCJrLyxisqyH1YKs0sxhybcgiuzO6Vh2GjMpHKtzQNg184fQ0LcwrzR1eVAREIgad1bmsBk3luZDIhcss0ZmeWW5sbNXR2uRuv5sl3b1sCLwN3ktoqNVuyfbSTbHyE1ehEZuscVmtq3VAdgaZpHR777TdwPtlFRro1Gzhtgn2dXNvCmNO9+x8i0q4q6e4jgJjqkzPGhMJKK1bLWhFHehY8WhFcprooe901jbrPnxwVr8qeBqorkP6wqI8AadsnhJk/jOGq1BPmmg6yxWxtytq6RZNatLKml9XCVAEQyK41z0Ja/yzd90j5yyzQvWIk8TJwk8ZudBLZ8flBQ8AabOz4eMEltWzSN3dD75FIOkGpvqZgWpqQb2A3sCAVouZ9NHUcRFUVuBbTdmPiXHeDVCua0KayLOozLDz6AJywyRL4yEgpUvWuHZoUUoZYNnFI7TSo/sC3fQshe8hy4NJbQpDV/TUhKLtmPNKEyaoz26BJAbLGKZaeWNlHDC7SAIjawl9LKI+YM0eVhi+Bl0WbxdBPFMaTO2mwEdrGgVQ33Fnwfd48/h0mbYxJcq6ShNF9qjFyBXFAFjwjSC7vIhRXDXm+KJJ571ehqAFh1FQSy8bilfC/FJGavv+WkUYGzucaGe3HEEjnqBmCoj5wxFMJCC0mpMOa0ab//lHUUgnn+wtHvEWDppSXm3nSMQq+gICbgumkDOPaBdtREIOIYF0k7pvQwBoJmc00m+T4yl0elk5yiFu1wsPe9fXZPSNa5RF6okpsQl+3RVl9+HGAHx3JN+1vQ7ja3R8qSd9ZN9l/FoerlVyAcbLxbHKILxGI+tU4qRkna5yy1TYGfppGnaWbvD1XZArOP1TpI9v/0GhQ8U00c5igDio6AB54KBH0otpeV4j/EiGC0lGNOzpsl3dK4m6lRBMiV5c3iAAP+i/OShCCiTxU+ctTAC00uBXsa3uwJKvKPZG0x3Nf2OLRmoVC045Eava2+efBDVYT6friZqQWKCyBcqBp1FIjSSdniziBdT8mCMpGE8nd94rS8vHMrjoptXiJXsjYqQiD57F1EUBd0mFAFd15LymDodzOSNG9WAh4rVQqKE3MgPd6290Fb2CaAhwKzp9Zuu7NUEvCSCgjfXehJkuWb9CIkRxkCatH+DDCgUst4ZtX6ujdmVpvsWHmgTyczoNe2CIg74T18cl5s1EFg5ZGPPhq0VpaS8LCAz/AItYWY/LwKY3UNMUQ8wvmZCGX76St8Hhe1gcXz+GBpX7X6OKVFOWdD0xLVKr16cURH5AnHytmhDCLwWho7BT5IwILESNUZxdEaDnc7Ve2zqgNE5psZsnheYJP9nZEy7OHPPer3KU5BXawlH4RjWxKnCZnCDPIUysYOp+4mbQyqgn/DubJUZo3VI3mkDMIXh6LSQHwIyOnL6ejHTeIDuUkJUzYVfDZdqCRfkiFnazxZY3abiJeOxW14/bQaNg3eF6h+go5GiO/CXZz+ptY6FcXX11RhkZ3ztB+WVzSeAxdpYPQxbNy1ZiaHRLpomrfLKCgroh7hhVvk66QJJJPdidCf7YvSmOrzrnh4KqYqP7kkh4b70OsZM+3hY4iukoW5OBes7Fhdejlewq5xVed0V1bFd683blulV14VOUwukhCIEoB7c3Q1+DWj9YwFNdOqMTnVfp3EWS/0p9qcwS+O5mljn66YVWto59IIgcfIgCix/CJLuNWEXn/2AISpH94R6oNW/YG8bOh6hCJvkcxIcXsGYIdkGryqvXlLHs5cufhBEVZV6w9r5Wd3EbAnauWKLF2Th+NKrUpIf7cVYzHNltP4dCPzLgIogFQZ6RGbUZ3N54YrxRHbMtLbDglVLOSPFOk5dNjRNWYRVok95lmPiaMWWEwTxC3ciUKhMeQIeSDGBTX6lUr4FuyK0xnC0OBWM+SUfTJkfqQmn15S3bTvypZa3nJGmR5JIiiIOedUPpRhCkXXH1LqXrCaMvhIimZCjK7JBufilWxuFIgxGa+Ffpa2/hChBOLCINQ3dhAh4OjpWV5Cyn8dr09Oitruu6WDgTbse2VZI/1062VPCGuOTPGBIUH6KqbwFGBqODjdSGYmCd3jBx0O4VcG17Qm7csRAosUnfXO9VJdyXEjAkpH7xAmWdpHWrg/+a/qSwipSQtTCgBu1dvpJvvomIEeQUoP7h80YI1yI/7qDMGFs2egye7wd54KYbLnwelmqy9I3ZVpFQUvqyUiaSuqra/IfNT9UQ0WEAF1bDBIIRnS/J3s5kCxi1mB0cjQagxT9F1EKvYqwC2U0Zmzk+dXPRzJfapaypW/HPnUC1qwwmrxGEYz59iNLoHQ6nlc0RMWjBlO1l7rk+wPa6MgMEiqewcXd/GDhoIjzjswVNHPP2qroqyTjPS4/c4vyciFtnOHvOW3NepOWqsmvz5fQKNSmlFOYFPTJKIZfFQmfuZlC8YmxnuwGiZL5g5gEwZIsmCijmMRhTsUQZNO4XLtlG4q5Wq7j4LN6bmmL1/TqusmnZwsH0IaKNRoXEzMiKO5S0HwTYHTVSljjnqPHz64H7YK8XDvAhSaiYtY01rSMfd8v3WWZ+3lN/TpvLsA4oVe2NgV75sGEDWj7J2bEGN1XkvR3AaUeOiOj1s3Z6DV9fc4tgheUQ9BQq+ElQNoRaynI9br0a99fS8jrkOTlwnODtiVbr88ogbCBY04wU7FnAz/59anauwCutl4bQgcozZXwmYoSZEHXsjmuMv+QdSStOi9EgjRe+wvygkueic27nPhbMgYDW5zr90TwZANNdNwozPYL4tAvAkViglq5aFpvNK76/UICBAGrWDyO13JZzfjalXHpj7zHH1zI7K8hbxueNG0zzMGWpt87zQS5kCxsIDmErfE7yNCPABcTH5/sZLmQre9pJ62iraj7thnbsSVVWqfcnpOhnWEci3jxkS5VTTb0JUnGJHO+rRh8soFV01aAxXwRJ/2FoPj4CUEvfa4xYZOm77hF0AZ/KJrrMs9zOa7Z0tXHrsq8wMvWweIoFmL3xTguU+ea3/ZAYNxtoPVFUYxnhzeUcN8LsDtEkktoEp1ul9/cIGW6NCRpV1Rs6rxhStZkc6w8rdLJsYotT7JYS9zQiTJPy7/5z7sNAGxH5wqAnPBDjmdSERnRSbl6ZeAqxd9QVhjZFofnKEiSdCjYyGoyYPxL0ut8rYdlYYxtS+152/L1Aot8QM5RyWx0NOgSv3PxDwJgsnsF6kmYuIgaxte2SikYvm2FgR+GQRwnnjcUadl1Q+5NSe7FWRhYUSRfvpUd5gOjiDmo/RgPzQ+8nVlkThOIqhrS5vzwnfhIXc0NEiuJgyKOmZsH4bR5WextE9pBYYdRHH29H0PYgIkOkJ3w0WEvkH8oN/gVkDBLyFaoqKphfPy20E4r/RwELgvjKhmWjKzTXHcVX6u5zdlsFk4u+/TLK1bm0SNG46CPBSiOv7Ay9JOAPXGGvc9wk8eXv6ekS4dhQs3PsswPfUvAt/A7gTCOvywXiVEBH6+RHzDS4rUPP8zFPgiQMIvGGwyS1YqC5jf3vB95e0MLX6H9spuGjy6ZNUCt6RgN8ML/mZF/EMBsqh0+jnVAdahO5jfu7RNoz3aBfD4Kk5bsX3aONnAW2s9DTL8A+bBUfCwy9AMInhTiTadS1Ao//mV9VZQOn8D5LL4QMn7+Ufm5UiJsIGx380cqQJN3aBW/J6A/n1CBuaVsYJTmF43otvDSoOu6aYrjIU46ZnGesspKN2Z13fY0FCAKouYi1v6IuRD02s/0MH8r6J7PI49TXQwQ3hcrmPfjsCTJMHYd78QGFfxVXVjX0Eh4nu0DUhQJoIzJoFAn9CuoSc8loB8Z6AW0EoQhTxQDhPRPkd+9JEMCY+evdhZiphADXdsy4dUUeGQUI2jQOKI1CN1JW1AFVv2jpUQvhHj6HJ1/pdtXwenQovef02bkxcxp2zFO2MpX1AIe9zEnY9yOTSfWXrJ3FqTk4szc4IXNmo8IJMzi6UlwwBwXn+SJ1tGZjnTEb8SOhJGCGL8HKmazRyhJK2YlCpSDt5Ms2Dulv/lB3oCdMKMi1GfMHDG6n29t36+Jwue/UQpwdQ4ZF/WAE0MBILF4vh75R0DMpSCdQX+2j77856CWsAFnRg8SCDlQOsj2s6zij4EYUEJGg6u6h7hITZ9nuGJe6MyoOPvMveD/wbzA+7NV4AZKJ6TKcKsvAi1k5/rMusLsSImggZG8Cb7oSVHzx6vADXB1VWHXoqoGoiX93WwXeKZYDYixIV+4wdL+xc3ydwW91Q7wi2h/Iusxv+k2UJqetApEWiBKLUixX9Kt/pOAPPckHnC2RcqH6x1++XxwcSUMnHArjmII0UQ8+F13+z4QriAQaaEn9AF6W/1XF0TIRCg/3aQIHYWgEB+wPvx2wEXTF3y+fXr3ifjsv6C0UM1a+ApbpEJ7WHi2Lfdng+5pMyrCdvC5qCsJ+oyBsLdF2wFuxVHyAGToR4BFZE6CKsgiQjDZLA1UevQLYn5LbPagUByfL7E8AkQKnYi6maiqieThGBxNkQuiSogCG4zurhoPDUyhbeHxxKwakiBN3kThLFFEG1K06d1HIUM/wK2AgIqQnqzd8YsIuJcD/qzi4JuAZh8J+pcc7V7kguFeDhD1xj+rOPgWoNOXh8VUi33oSHZL4QaRDP1pxcG3gBqeLO02UN6mZpEMyQ9Jhp4DJZMaiWRYFEdb2HNkVf8VQ/QfBKJRfhqEQ+z0ffOASAyyVgzP/J+oAYy+KAiJRgkmRmIIcTjp/Z4cPzOk9GAQw+NRCXs9xBEUQFSGMn1nBf9KGx4X/9iAKI7uc6ie6lz3PV87N3Q+wiDle0IMi+w2cCuO4g9KW1ZjMXyCVKERfjHdQ+SjQii6GI/ABEG1xaSMqAxZ7UUT6RFyxn1yQBClR80T0Qa03d3B9WlsGMmQ+AG9TS7vTaddQJX+R7dOnsVnG/g0MyoqQ0+d0n1aT/wqE1kk+VQ4eCz8YwOVros5NNEm0z8PpN2m9fDhl/NZWAiIMfuHio+C/+/z0vBp94T45otOKVSq3dxSpWznCvkflTLR/9hsLypheypIp1s1QDTZvp4cBLGzZU+YzZOYKxUHcfwpiTOFucjT500XI7+0xznU7tvoPDTR9yYHxdjmXjbJd08g5PTj8slHkQ/llqJFp4P3/RsSw+N7tVyUyXcft4vku5ODwK2DWHgU0T6XI7Qnf+5BMcUa2w+iJaY9Gwau4HdPZBJR/rak6cncXxWKZOj4HAHEf7UzZNFO8PcEsjs9M2pLx1A6Km71AdwFxGfSBk5Cl8O32woxJz66l6c8YO8Q75WhH6QB0DrHXWeeDoiAb6bVnq5cHq2Sj7ly5/NafgoS4ycn1xzwv95AgHnArS9KSSLtz02fyNAPLifmd61dAYbbvg6x8+I7h5JombHmKSzKK496uD/oKpHJpDBK8+R+eTPQBk82sGr6HuQFGfrvTqmY301vnkDadgHm0teFBMp0msuh7hjBb3/VHq2OJLEMSk7LfmjbP7+ghSreHkz2vQO7GwT2srEx4S8/eQLRYERG/fVYBsQBlxaDq+tyuPszvRoSuxyKMTuRMPxnPShcXDEkQT4VR28E+aWsF7OIva0sEsq95SbGMv7tQSDLxgOnhp02yp2f5/WARINCVcz+8q9zzMXGoV13hSSK24Tx3jh96VV35d+T6fq2wWc/puQfRaCDScxsLKT2Q7xWRvYM3uJT29GnwTGKAbB+cuc3KxYR4XXbKDB26hXcOrHxPofGTv/sy6Wj0jW2cqr44QO8XwkGaRRHgtJWs/ZlgjnaA+A/LfJPOdKrcBtHEArQm/u2dOFMnwoJlLsRflZLDcv5AEpAIPKhEJ6/Oe3DwvHhFsw+75/BBf2pahj0Ykrx0zbQPT5++oHj7n4G2OHFh768J+isrOXRI3uLtOj03ZEJY96LozsZ+sma6NM4wj6k82QVu2bUtimefx2Iun0EJRARSoNMPRe4UJssR7f1Mp8oENTn489vK4ZF3+sHouN8c49NdLaUWMymOjoNPoIvvOGUEN1Uz6kwAymajc+TQkBeQoZ+AFFLifciGxImMZSBqUHQGlBHqrwsyoc5OhyYNDJ1Tg5mBYY4ZOdpG6EoC7/5jBVx4Oi8M6viYJWB2K0Iq6tkWkD1D/RKdnAs/GO0meIuqKJqfLOB1rrHGStiHCGht0qT7JQoAPuQ8eFEYvMOt34v0EbqmgOD275q0NLdfAf5ToVgVCYxl4JWoS5Q2VLcYk7SzYe3HBB6b1DqaDTRhbZeJQbuBvvpg3drB4i2q+gxcPk6KigASi0f7I/0Al4M/OdzTM/inuDQgXhHtid9Z+f6T0Okzm6Da9+2mBoQSGXufaBNq0gB5IhXUlMdZiQEygpWfrWPd56hF0lCMSukPbSUtnI6SixAVvAhTAEz2XOoj4BU1YpwWZQafFt27j42JrJFW6ZCBOA7EIXGrKvWB2i4UDrJamLYFiopayX0g8oCvv4uM/RIDUxAEUAntYPKiRm0+hsPZL7LXTnHYpCaWUqN/EQ8lQgRBIHxPp/GXCECcpr4MTVinRR6Iie/tRcvysLOOTEcF5JTiwk8mBk5lBC/U/oGuQP8wAMbLAuWQz1KKdXl37mPGzmLpBKmlKO0UTM0VmVelOrYwCq377My5wFw/ZUG2SjRMogsI7SJrT53Cta7AxMgs9cCw7JhktvlUBmBbYTnE6avevEON4WpoUwoVzEhUVMjM6kn5N+Ux0x96zH1P3lDJD5GOq+VpT3m4FpGpvXoF8jphB47dincWQiYIC1WBoSrJoTHMD1eroeOqB6cAyOS3N9gDICRPwMbNfEMhTTOB8Z1ycqPvDhyQufDyd7uujK0tQ4nuUSCqJSrVLlSCHZo+K6R6TCpo/PLjYHCpvrecZwVRtTYiCIjP5s65gi2b4jcha5VLrv8fjKg7UmUopAJ8YCqE1BPPpskPYyL0jcKit9Xg19qDMAt+ZSLJ4/l3R3KeXjcu+ezUl+IeJXwRrnt3O+eMAQYvX7QS8pJYN+a06p3KqgeG6ZvWKgNkv0LjQGqkzwzZR6lAs4hukNifaqOQqZTirYa4BqN0t1eB0dHZeRHr41P6IRvdRLxKgi1CTRIVDJIwhuH8q8yBkoyKTYzEQi8Y7soNTnJ+j99QjWB+TAb5LwZ1t3e1EI7U/yhVMVP+1QnEemjXF6VlUsFQW1w3F8UGaCxT6dFBALZE+4w03z5X61f6JSx0wk1nMRIrLuJoNLoRW6hObSZ+fmiFLqziYsROUZgUiSnwfEXGIPo++okO5PQpBsGAimNZeeLnBVzJSJNpD52xjet5p//2FGZITz5anZR5n8tNJBMDnOVr0p5PVSrtPjvbgzAfTWXGdEzckpQ+uAf9a8Gw+h4SKujcoiBy29458nXHxxGmCHEFX7sVxNKpSsF4qdmQHTkJ5H8Lsawn8K0FwNXXXWMWCXd4cIO83gy1W/fxgHTceRLYxB0k/cDN8XLp2f7m5MwKd3Ukw2JTkIbYp3mnyLDHbMnSq9bkkyX/WyFbD4MoCEnMakfZar/PdPDXHm4XlNTu2ejh/JAlg5H/3vnSLahGqh9JzW9Urfy5O9nX5Cxae90/AmUjqLZrqm4aXR2kAPJHHMhfsrzo/3cLpJEk6RzdkdmtN8In+fvdyTEMXCnQZ+otrvGTDvGY3ZWFMWM71FRASZZPUHCfw2PGob6CUyMAmdMEPTiWaPDJRjf4QCa51UbSC7rDWZO2xFd49yfJJc143Ww1bdXVGBVcqA7YDt6hie1FyTFminfRcD3AzSWrC6jlCIxMSaM1+KuxZFgb5eBmol9pRUTBD05XMFGd6jFqvXhdpQiSTBtNzRCEy6KJ2b7r6gcEMtvfD8liEoYVKp8kvCqxAyR+aWTbH7IrWRAkqM/HGZwRBU3UZXThDIw39h0E+0KOkoxIcOhokiIqeHLp/umwXcEXB3JAq4wiuFx4UxKAYbTG/VV7ijk+wsPAwvoIjFLyj6WE/gCFFLdzNWR8qM4EGKyKeau7ZsuyWVc+32yDzwXL3eS7t8fuC+QMiODp62CpISu+B0/fPdk9ZcDtYAOqjhdJcqAltIfsE0CUhUNVbzF2ggcoPPhbaVcMAUlN+1uteRR9PU+vAAQXLngrSp5FeA3lElvHG/ADBR1KZSkCNUJovBjW8EN+21C58q+OCgieusri7kk1ED8QQkMyhvN6teALoIP0T21g0J5a0sDmPK0OQapx8H7E5RADMQen04UhFRJ386QNyUcxd6jNjt8pJGGH0K8+vWCXxdfuUdPB2pbcS0rOmi/rW31esASHQ+6IlvPnaj3OlCy5FmQrH/U2aOi97T299u69Llq9CfhdsT2X/zFX/zFX/zFX/zFX7wK/wM6rrUhWauiNAAAAABJRU5ErkJggg=="
            />
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">

                <div className="header__option">
                    <a href="" className="header__optionLineOne" onClick={handleClick}>Hello Guest</a>
                    <a href="" className="header__optionLineTwo" onClick={handleClick1}>Sign In</a>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>



                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Profile</span>
                </div>
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basketCount">
                        0
                    </span>
                </div>

            </div>
        </div>
    )
}

export default Header
