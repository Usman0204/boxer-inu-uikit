import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#C19E85" : "#000000";
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="160" height="47" viewBox="0 0 160 47" {...props}>
   <image id="logo-light" width="160" height="47" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAAvCAYAAABkKcEgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGf2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0MzUyLCAyMDIwLzAxLzMwLTE1OjUwOjM4ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA4LTExVDIzOjM5OjI3KzA1OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wOC0xMVQyMzo0NjoxNSswNTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wOC0xMVQyMzo0NjoxNSswNTowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDplNGZkNDE0Mi1jMGJmLTFmNGEtOTA3Yi1lNGFkOTNlYzJhMjMiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoyYWM0YTRkNS1iY2ExLTgzNDAtOTU4OS03MTRiYzJiNDZkNzYiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMzI1Y2E3Ny1iNmZiLWIxNGEtOWM0Ny01YWI0MTA0ZWNhYTIiPiA8cGhvdG9zaG9wOlRleHRMYXllcnM+IDxyZGY6QmFnPiA8cmRmOmxpIHBob3Rvc2hvcDpMYXllck5hbWU9IkJveGVyIEludSIgcGhvdG9zaG9wOkxheWVyVGV4dD0iQm94ZXIgSW51Ii8+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6VGV4dExheWVycz4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowMzI1Y2E3Ny1iNmZiLWIxNGEtOWM0Ny01YWI0MTA0ZWNhYTIiIHN0RXZ0OndoZW49IjIwMjEtMDgtMTFUMjM6Mzk6MjcrMDU6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4xIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZTRmZDQxNDItYzBiZi0xZjRhLTkwN2ItZTRhZDkzZWMyYTIzIiBzdEV2dDp3aGVuPSIyMDIxLTA4LTExVDIzOjQ2OjE1KzA1OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8++8feRgAAGLtJREFUeJztnXd8HMXd/9+zt9dPOlXLsmxJLrIcY4MxxQbTwU/ADk9oTwjkgQTSngQIITSH1IcQQif0h/IQ4AeBAA4JoTsEsLExtmzccJEtF/V+Ktf3duf3x+z5TkKWRWJ+Dvnp83qtbnZ2ZnZ29jPfNnMnIaVkFKM4WNAOdgdG8f83Rgk4ioOKUQKO4qBilICjOKgQ87gCIUAIAYCUIKUkiUUUgz6SFSnk3Hy8x1eMyTuitDxnIkKwp7Zna21v+ytuHI+WiUCvFBKJRMpMW0NDAkNfl1KCAIFAR6PTitFJ7GsVIv8/qg4tOtzt1r1dbZGWPXt61rcRXi6Ry3Nwbgrgwo0DDYHQ0m2p9t6X9x7YERvFAYU4jitwCEGHjOs9JI7QcFS50Sfl4aseNyn30CmH5M049PACZh2ez9QpPnwFOggItSd5d1k3T923pWtF7Z4bKvA/4td0UlL+QwTUhEBaku30nTjRV/jbi6+aOWvhghImlHtA0zDDJjv3xFi/vpf1a7rZtim0u3F77/quRGRLDKMuRarOh75xLP5ODVgq7/ksxm0UBwjiBH5AB9HTq8eNeeSYf58woaLURek4L2WlTirGO9HHOMAtoTcCnWGIJsCSEHRDZRHEfTz5QAO/vLnmaT/WRcXCh4nEkhIDiyQmKSxSSCwlI9HQ0G0p50TDhYYmNDQgJg3qSVz9zbOn3/Hjm6YTGG9CYwd0RBR3PU4oCKjD0qHLpKnZoKEpRUtLnMbWBOvfa4+s+KjhtgJcN74v7zvYYzyKYSCq+ZZ3asWY8ItvnaK5SvuhPw5JC/qi0BOFqAGmBE0DzQFp6ZaS4ExBhRd8Y1j2xyhXXrfq7Z2J0Ff8uMd5cR0RRK8Oep2VgRxnqc/vzHe7tAACzTCsSCxq9obDRltff7K+h9T2KMkNcZKbPTh/8LPLZv/im1eW4XB0QVMv9Gjgdqj7SgmWBZapBKlXh6AXgj5FTpcGuaUsOnc1v39145H18ndrDtrojmK/0EOk5p/75QrNVdoN79SB061IpmkgNHC4wTFETb+AEi/XfX0nd69czqIvHcoZC6tP7bZie+ZMLwxMrPQyrrKQwiIvOV6J0yVA1xRpUhIzaRFJCLpDBq313ezZHWb9tt5wX6cZ6Ou3KJv6F6b5fbz1ynRcZRp0plRdgZoIOFU/UkBnEjpiSjKnDJgd4T/PL+X5V7dfCIwS8J8YehD/0VMqJbSEwBsYWS1LQqWHxbe18seVPdxyyTRmTA9w7Jx8cib5AugGROMgwuDxgMMHaGDZ9d3gCEhyrTi5+VEqx8eZe6qX87W8AG0Gy1f28Ju8ah55qp5fLmrk5t9PhK7UvvsjBAhd+fS6C+r7mFAkqPDmHfoPjs8oPmPoObhKCvIcEDdGXsujkaxL8MKfenj38amM/3I+NCWgqx02mChXVgOzDRwN4M0Bl1eRQwgwDUjGIR6GZAwcurLvsMClMe8oN/MWFHHJt/P56um1rH0hxOwv5kLHMCTcCwkG5OZo5BfqRX/fsIzi/xV0E2mkUhZow3mug1Di5PUH2hlf5mT8yTlQE7EdWx10PVPOoYO0INoLkZCy3ZC2ChXquss7sG0L6LKgIwozvJw4L8DLb/Qy+/x8aE/ty4EeCCEwUxLTkJ9iVo3iYEDrI9nQ1m4oY34kkIBLsHZTjBnTvRm1ui8ITUk+l1cRTmjg9ChbUxvKuEz3TECLwSnHBegKmdBsgD7CSeLR6OpO0dmVaBlZhVEcLGgxEqu2bU+A02lLqP1AB1oNenpN5s72KdtsJLyI9sKkI2HWGUr1jgR9FtWzfGga7PgoBoERLtzku9mx26AlFV07sgqjOFjQvbBibU0kSv8YHw4T5H5est/B7nVRhBBMO8wL4RGQFpR3OrYKgqWw4S0wU0oiDltHQrmT/KCD1RuiTDktB3rN4euYJng8rF3XSYT4XwdcW3L/r4DTgEhWrgMwgHZgNfBnYPfIHupziznAQmCwJHADfcCjQPSA33X+5Z/I0gtxx9Z+HHqrdVvFWWMnu6B9P/sDgw5WrYsRzNVgnBN2J/d/YymVGpY2WZ0eMOL7rycACZWVbup2JUamgl0mdOusWNYfykNbMejqScDcYWp/DbgDuBNYtP+bfW5xAXDlMNdf4LMg4BDQfEKniZ6n3nwvAmPzwRjG05SAW7B9R5yioK7sNIn6dIphHBmppJ3Djt3pLhVIHqp9gWorTbaIxdRKN+2tKehJDb99wpIwIYfNawxW7W57vgjP4NnUmZXuBxqANqArK18HrgduHOZOn3fsBrpR0i6NFGocdgIjkCoHBpoE8nG89OfFbT10OMG377VaHEDYoqnRoGKsCxIWBBygQTJmqesezQ6pZMEyQXeDy6PO3X6wBhFdAm4N3BpGzFKrL34HmJJp5W56ukx6diXAN4zjYiYhN8jil7qJELlPF8OaEz8BJgPVwFTgBOClrOs/AnKHa+BzjIeBicBXsvL+BkwCDmfghPxMoUkBY4SPFU1Ndy99rQ+q8iE1hBSUgE+jf3ucnm6Lo2b7wILmpjg128N8UBuhpjZMf29KkTIbKQNyAuC2A915QZWX3bbfgWlYbNwRYUVthJW1EXbsikJCUjDdi5Dw4dooBLWh54cEyjz0rk/x0qsNq8vwfWwNr7G7UbZfr51eBpwD1NrX/UDl8MP3uUUMJf1as/KSdl4fnxQhnxl0gdq94pPWnQ8+3PjzE86e5iDQA9kmmgS8AlwaS97ux60LSmf6aN0V47Gnd7D6gwjBsmKKgk5OOsVg3qE5FJe5IWKBC8hNQdkk9urPsqnQt06FZCJK0sVCKVZv7WfJO2H27DHp6+imYoLk4m9M4oiTxzBxvJsV70f44leLwCNUvWwBJ1NQVsJjv2qjweq++hCRizn8OA5la2iAz04ngaYhyowFvg4cARSg1NlS4KlB5a4CxtntPAA0Z127EigFAsBNDCTCccDZwBfs8y0om2zloPYnAt+x+3w9arL8AigDXgQeGaLvg5Et4Z1DXD8WOAv1jA8CxwPfsp9rK/AsMNjOLrX77wPe/0S/l9x/PMoJ6gN26VKCRDJe+CNv72z62euPF958xn/lwvYISNvGc6Bssg6LNR/FqK50g0zx7IuNlM44kaPGOvmfR17FiwO/X+LxaozvNJgxw0O0McxfntnDumYn3ckmLDNFjidKdU4jXzonSdnRRdTvjFFbH2PTljhLXu5hm+znnBOPY/ap43l1yXtUVbiZd6Sf59/qIbIxjq9YQ/htEoIiebGbprejPLp41/IKvMss2N88ngKMtwdKQxHqJ3YeKDU1WBV9E+WgBIfIvw64GEiHfiRwjZ0+Gphvpy8Afmun1wI9We08A1w4qO0zUObALcCPs/KnkXGUPgbuI0OoGg4MTgeuRdnJfuC2rGunAZfbfbt7UL8esNOP8smJcxlwvp1+S0/rMwEUIn5z+wO7fzhndtWYggBQpEFcQlBj15IYwoKOLoOFCwvZsqWd9u5CrnpSmRGv/24JZXmSXZstTp6vsfbjDt54LU59awFlR3yJEy+sZEKlC4dD0N6aYuPKadyxeA35L9cxYYpGeXURdVssJhbrmO1xLrnlixw3t4KHru3nL68tZ+GcyTzzcjcf1ESYUuKmcr4HHAIcYHak0Drd3HlHAz1EvlEqAqT2GyHnRhThdPvIVtj3AT8YVP5c4LGs851AIzAL9eIPQUnCaXb+b1HEu8B+WXPtl5HeH9YNnEhG1yxGmQBprEGF+Y+yzxcBO4D/tc/TXmocNVk8wCaUZH98P88+UoTsz3wy5Ftt32umfX4XsApYntWfNHqGaDM7rzu9CIsFjBUe1vf3Xvrsc22vfOecArpbkxRPc7Hr7RihOpM2r0Ffh8WxJwWoaY3T25tg89oeWpa18Zs5MQo8fn6xTae3o52yygoOPXsBh51QhQAaupqp39xGyjApPaSAExacDJzMlrVtdG/6Gz07PqQrGeCMQph3opPlD29krK+Yxj0hJhc5yatyEXTrbG6OU13oYdUzYWaf6SMRltAuWb09xIs1bQ9PwrtjBOQDJfW8+7g2AeWULLXPfajZnMZ1qFmfQqmje1EE9QO3o0gHSkUuQEnMe4D1QKF97dtk4nBnkiHfBuA/gY32+XTgT0AVatL8HwZ6qbZnxyLg1uEe+B+ACzVhzgHes/NuAH5tp68mQ8BsDKWDsl+OpWf7vBaSclyvPvNaR81Jc3xHJholtWsTNG1L8u8XBHljcS+Tx7mhXId2H1VTOrn06JsYY+bzyEUB3qk1mVQdwevPY96ll+LJyeF/b3uFl+5egWh1ouNEIEiRwvDFOfzCidz86Hdg9gWs+F0/VRUbaahzkF+UQ+1DNdz0xIecf2aEiuoxoFmceWouf1ga4mtnFFC/wiARj2CEJTOP9fD7lzsNgbzKJbT92X5pvA1sRkk/ibLHjkWp5rPsYwHwOvBvKCkASgrentVOM3AeijgzUfZPIUp9h4FLgD+ipOHRdp2X7bw0vmV/mqgXuxEosl/NZuAJ1MseB8wgo+bTWMdnR740riZDPoCbga+innkWakKPcFUiAw0y2+wA8oTO9njy+68v76N8ipPO+hRl5U46Uik2ro5zwbn54IJwyGTS5CDfu8xFxSnt3NWWQ+O0McydJZhz4cV4cnL46XmP8a3r76K5tYtcfBTruRTruRQQIBpNcNdji1k4dhGxaIo5X/sGxx5ZQM4cH3dsLyJ8Si/fvzjOvOOKCIdUzPC0hbl07DZZUxdlzvE+2ptSlFc6+WBLhDe29N9cgStmIdXz7D9mfT9KzX4fZZd8HaVGbxhUBjIOAcBD+2jvGfvTjbIn03gJ+J+s8z0MVLXCvm8aj6JilPV22V4ytiQoJ2gw3txHnw4kdg2R12B/elAT+VNDsxcbkOqbSZgCxuFc/dd3+2uaegycCI45OcDytRG8SY0Z83wgYVyhTntHkpLSAF85u5TTzghSUdxHybRZFFZOorMpxAuLl3Ik1fg0F1tFHTXmRlabG9ggtpLUEhzLIbzftol3/rAKh8tF+TGnUOTq48SFuZx1VgkzZubT3GpQmOtQG2RLHMyb5Wf50jATZrogKXEHNd5a2p8QcLvQhL03cESbFoqHyEsCv0F5b6DiYj4Gqrz+fbSXvazlG3TNlT3mKJIyKA+Uu5f2jr32kUtG+sLA4HEavfvo04HEUJtF089hkFG32bGJoSIN2XnakJHaoHBQ35d8auWaCEfM9aGXaTz4fAclhTokJZiSCcUugj4H/WGTzo4U/V0G0X6T6uPVSpfL4yAXP1Hi6DjwCy8B4dt7uNBJYODBRcEY9WxVxx6NK1hEqKmf7s4U/f0WAigvcYFLQNRicoWb3y8NUd+RYMHZQT5aH2PL9vibxeiRbMU7gl8cGS7an72P0AFszzqft486x2ela7PS3wUuzTqfwECJJcmsPVt2+fkoO/IClJpbgLJJv8In1S8MHUIZCT6LeJ/cR3ooZC0VSGmXV3WiWBvzgzqlp/v5yS2NfNAd+VVnJNXTWpuEuIU3X6e00EnClCQTkmgozJiJ5ZRMrQIgtzCX7/38S+ygmXarF01qCFvRa2hErAQ11HLeMScwd8FMQKK7vUyYOZ1oTy/JmMQwJQVBnbJCJ2hgtpls2hqjCePWK29qrPWWa0yb7qY3Yn6sj2hLzn5xDPAqypMFJW36gQ+zyvyKTKgmjS+TCS1sQ9ltAOVk1Pg7KOkKKtaX7WW/an9q9r3/CjxnH39A2aHNHPg12uztapF9lvp02E5Gyn2Z7C90LLk/B+VwgZLaDQMkYJp+KSm1MU79hzFhcf0Vu8wn3uw+/zC8P9/TmWzesC6uNowGHZSPcxENW8TCFmYqwtjqKtQYmoDFpf+9kEd//SMCPg+b5W76rDCmlWKLtYcwMa77xvnct/RypTKlsvNKp1WjuwRGUtLVkWJCqQtHUIc+k13bDGqbEkzEtWjtzuhJZ11St3tzS5xxBc5LU1gFmSeQI9kidiMqLLIWFfLYjgqqLhhUBlQc7Ak7PR5l9N+Aivs9hPJS0/h5VvoFMrbRZXadtC11D0rFY7eRDkZfhQqnXINyYG5F2YI7yEyMfxSX2fe/OSvvcJRz9ZCd/nvRgdpRBMphWo2ysy9HjXOlfe0Z4Im9hqNE7hWYmhCnBnHMv+epjkd6MG+rEu46E2hOGa9s2BabftRuH/nVLvICDnpaUpRPdmFEdUqqJtuNScACoXHxDV/kzG8ew/OPvceL9ywjFApz5XfP5txvn0j1YeV2eYM0Y8ZWTcJfUAiWSf3uFHoKqHQSfTvKR2uj7Akla/xolGh6y7bWxLQb7m2+tszj/JFX066ypPxZ+nnE0AzMy0qX28dQiKDiXndm5X0PFQqZh/Jyfz1EvbuA5+307WS83idQKxqg1PE7dvod4FCUNDgdWIKyTQ9hoKedRhVqBQIG2pUj/DLPXlwLVAzKm0jG2akBPmKgLTvYboWMbVrMwCl/JWqcxqLI/MCgetuAG5h/eW+GgDJTXwhq4ilZ7EVEA5oTCxBIklL+bntb4rr6rQbeMgeNW5K4nAKv38TpLKCockLWPYRaHhOQX5LLd39yJvHNHla9u40b7r/ILmPZW7TS95a4/DkUlJXRsXMrOYVemrcafGGrQXtdim3NCVos48lxwkkKGKPpiZQlb4rF5a+FoCT7GeznGIyPUS8x25BPhw+6UFJmDSpE0jyobhylOq9HSZDsh/0QRZjF9vlklL3WYLeTvRHuXVSQ+jwUkc9DBZfXo0IaP0fZftmOx2qUxHorK6/X7q8XJSE/Dd5ASfoIA+00B4rYO+3zJvtI75QZjA1ACcrmzW6nCUW8O1DjkLZR46g45jXMv7wP9u06h4QAR/rnOgCkoADH1k2NsfX1HcnDAss0/loTxlmtYUTj5JVNxO0fYvOIHWg0QxBuN3FrTkLrIH8WfDJsZAI6eeNKqF+3nuKyHNYvj5HX58CZq/FxfUy6EE+BLWQFONQWMGnJAeup+8ITKA8322NNBwK6Uepxf9v4b0UN8CmoteBdqLjeO1ll4ij13Y9S34PtqztR6t/NwPBGG/BT1EQ5BhXYrgNeG9Q+dv61KAJ+2q+ePo7a/TLYnhQoAqZt2KUoqZgiI8Gz8TBqUnSgXl42WlHB8c0oMpooyfpUmnww0tiN7VJ6haDBNG78qC66uLrUQ11XgiOCXhKRJP6CPLvwIFIJldexQcPr9pJb6KG7FnIPSeJw6gPL26QKFORjSSgIOvggHCUUNQlHU6zviD2ZLxx9cu9k+5SOx/zLazgw66RP28e+0ERmyWwoNKKci6EQQi38P7ifPnQx0Pb8NFhlH/vDTjLScCis5JNrvdloZKCd+QmM7EsWdqRaCgii/XH1lmjryo1hnAFBSbETw7Dw5KTNkMGetwYJQdMmi60dDWzqqGf7xjBGs4t9EciTk4NDd+JxCZwBQUOHweotEQzkL/V01FwMda9RfN6wXwLK9B+pBGGucNDab1zz7NIQuiZwOe3NDEOFFIW6Rcd6wb23PsHaVS+TbN7Efbfdxkdv9qsCQxhqKqCs0nkBjVdW97GmNvpCMY49VtrJlSOK9Y3inxz7JeBeegiBEAIpBG4hntmRSOxuazFIxSW6S5CMxoaorUJAN1/zHhP6/sTDZwS447R8Lp2yhlsWPUe8KVMmG0Y8jpUysExBsl+yLRInkrSudGqa+uUtMSr7/lXwKX6gUtq/uadCHH60S3u6U3Q0GgTyvPS0tNnlbEIJpSc/eryfZ5f9GYcvhyMuquboq6aTP76St0N/4w//bdu6QkOJNUX3UHMbHp9Gf7dJS4OBF+1uHVqsvVIvs4VsFJ9vjJyAe3Wxghvtnf6IDNVtTmAkvfS17KSjzl6xEjrgIPoxPHTTXzgyv42PRSnf+3E31/60jbtWefi3Cg+Ln36Juhfsbggn4MA0EjRvWovTm8OerQm6ukw05F1ir80nR8XfvxD+jp/oVSRwCQgZ5h07dybp3J0i3Kux8rnniPWp8FmyFh68diUbdi3hoosrufpnYyie5cQqsPj+dYVcc8VUDK2Wmxc9SYu9MmrEOln2+GN0N/UQanawszZJS09qpQet8ZN9GMW/AsRx4gpAfaNxb6YALcs5GPC/RLLShir8wcwq99zJk7143f348z24fVPZvEbyxsqaHW6S0dmziw8tKnXg96o2E0lJd6fF1k39u3f39XTMLZ9+1LGnFKGJPURCfaSsPBobEqzbkoj0x1Nf8CEaMnfNOCgi3VnAknKAU5LekrXMGv2J3n9mfGoCZqcFioQpxL1jchwX+X0ORyISpyvcZ3ZhPJ1L8IcezWuGLKPKQJY71NYizYSIBi1B9PU6ki56fuBHXlviyw36crzEkxbtodQyE3m5F3ZlRxbFXs9ZjhLwXwBi9D8ljeJgYvTfNIzioGKUgKM4qBgl4CgOKkYJOIqDiv8LQSNWy455xLsAAAAASUVORK5CYII="/>

    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);