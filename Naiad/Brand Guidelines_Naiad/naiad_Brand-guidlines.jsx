import React, { useState } from 'react';

const NaiadBrandGuidelines = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [copiedColor, setCopiedColor] = useState(null);

  // Logo oficial da Naiad em base64
  const naiadLogo = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSBHZW5lcmF0b3I6IHZpc2lvbmNvcnRleCBWVHJhY2VyIDAuNi41IC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIzMTgiPgo8cGF0aCBkPSJNMCAwIEMzMzcuOTIgMCA2NzUuODQgMCAxMDI0IDAgQzEwMjQgMTA0Ljk0IDEwMjQgMjA5Ljg4IDEwMjQgMzE4IEM2ODYuMDggMzE4IDM0OC4xNiAzMTggMCAzMTggQzAgMjEzLjA2IDAgMTA4LjEyIDAgMCBaICIgZmlsbD0iI0ZERkVGRSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwwKSIvPgo8cGF0aCBkPSJNMCAwIEMxOC45NyAxMS4yMSAzOC44NSAyMC45NSA2MS40NyAxNi4yMSBDNjQuNDEgMTUuMjggNjcuMTggMTQuMiA3MCAxMi45NCBDNzAuNDMgMTIuNzYgNzAuNDMgMTIuNzYgNzIuNiAxMS44NCBDODIuMTUgNy40OCA4OS41NyAwLjg3IDk2LjMxIC03LjA4IEM5Ny44IC04LjgzIDk5LjM2IC0xMC40NSAxMDEgLTEyLjA2IEMxMDEuMjMgLTUuNDUgMTAwLjU1IDAuMjMgOTguODggNi42MiBDOTguNzYgNy4wNiA5OC43NiA3LjA2IDk4LjE5IDkuMjYgQzkzLjkzIDI1LjE3IDg2LjM4IDM5Ljg4IDc1IDUxLjk0IEM3NC4zNCA1MS45NCA3My42OCA1MS45NCA3MyA1MS45NCBDNzIuNzIgNTIuNTIgNzIuNDQgNTMuMSA3Mi4xNCA1My43IEM2Ni4wOCA2NS41NCA0NS44MyA3My43OCAzNCA3Ny45NCBDNy42NCA4NS4wMyAtMjAuMDkgODMuMzcgLTQ0LjMxIDcwLjI1IEMtNTEuNTMgNjUuODggLTU3Ljc5IDYwLjYyIC02NCA1NC45NCBDLTY0Ljc1IDU0LjI3IC02NS41IDUzLjYgLTY2LjI3IDUyLjkxIEMtNzcuMDcgNDIuOCAtODcuOTUgMjYuOCAtODguODEgMTEuNTYgQy04OC4yOSAzLjg5IC04NC4zNyAtMi4xIC03OC44OCAtNy4zMSBDLTUyLjM1IC0yNy45MiAtMjUuMTIgLTE0Ljg1IDAgMCBaICIgZmlsbD0iIzJGNzlCNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjcyLDIwNC4wNjI1KSIvPgo8cGF0aCBkPSJNMCAwIEM0LjQ2IDAuNDEgNi44OCAzLjUxIDkuODEgNi41NiBDMTAuMzUgNy4xMSAxMC44OCA3LjY1IDExLjQzIDguMjEgQzE0Ljg3IDExLjc1IDE4LjE2IDE1LjM4IDIxLjM2IDE5LjE0IEMyMy4xNiAyMS4xOCAyNS4wNiAyMy4wOSAyNyAyNSBDMzAuMjIgMjguMTggMzMuMjMgMzEuNDcgMzYuMTggMzQuOSBDMzcuNDIgMzYuMzMgMzguNjkgMzcuNzQgMzkuOTggMzkuMTMgQzQ2LjY2IDQ2LjMyIDUyLjU0IDU0LjA0IDU4LjQxIDYxLjg4IEM1OS44NiA2My44MSA2MS4zMyA2NS43MiA2Mi44MiA2Ny42MiBDNzguMzQgODcuNzQgMTAwLjg5IDEyMy4wMiA5OCAxNTAgQzk1LjIxIDE2My4zMiA4OC41OCAxNzMuMzYgNzcuNDUgMTgxLjQ0IEM2My42OSAxOTAuMjEgNTAuMDMgMTkyLjk2IDMzLjkxIDE5MC41NCBDMTkuNjUgMTg3IDYuODUgMTc4LjczIC01LjYyIDE3MS4yMiBDLTE0Ljg3IDE2NS42OSAtMjMuNiAxNjEuMDUgLTM0IDE1OCBDLTM1LjEyIDE1Ny42NCAtMzYuMjQgMTU3LjI4IC0zNy4zOSAxNTYuOSBDLTUwLjcyIDE1My41NyAtNjUuMzUgMTU2LjA0IC03Ny4yNSAxNjIuNjkgQy04MS45MSAxNjUuNyAtODUuOTQgMTY5LjM0IC04OS45NyAxNzMuMTQgQy05MiAxNzUgLTkyIDE3NSAtOTQgMTc2IEMtOTEuMzMgMTY0LjczIC04MS43MSAxNTQuNzUgLTcyLjEyIDE0OC43NSBDLTU1LjI0IDEzOS4yMyAtMzcuOCAxMzcuNiAtMTkuMiAxNDIuNjggQy05LjM1IDE0NS42MyAtMC4yNCAxNTAuNCA4Ljk5IDE1NC44NiBDMjMuMzQgMTYxLjc2IDM2Ljc4IDE2OC4xOSA1My4wMyAxNjQuMjcgQzU5LjY1IDE2MS44MyA2NC45MSAxNTguNTEgNjguMzggMTUyLjE5IEM3Mi42OSAxNDEuMjIgNzAuNDIgMTI4LjYzIDY1Ljk1IDExOC4xMyBDNTMuNzcgOTEgMzUuODYgNjYuODYgMTUuMzYgNDUuNDUgQzEzLjUgNDMuNDcgMTEuNzEgNDEuNDMgOS45NCAzOS4zOCBDOS40MSAzOC43OCA4Ljg5IDM4LjE4IDguMzUgMzcuNTYgQzcuMTcgMzYuMTkgNS45OSAzNC44MSA0LjgxIDMzLjQ0IEMzIDMyIDMgMzIgMS4wOSAzMi4yMiBDLTEuMzUgMzMuMTMgLTIuNTIgMzQuMTggLTQuMzEgMzYuMDYgQy00LjkyIDM2LjcgLTUuNTIgMzcuMzMgLTYuMTQgMzcuOTggQy0xMS4yNiA0My41NCAtMTYuMDMgNDkuMjMgLTIwLjUyIDU1LjMxIEMtMjEuMDEgNTUuODcgLTIxLjUgNTYuNDMgLTIyIDU3IEMtMjIuNjYgNTcgLTIzLjMyIDU3IC0yNCA1NyBDLTI0LjcxIDU4LjMxIC0yNS4zNyA1OS42NSAtMjYgNjEgQy0yNi44NiA2Mi4yMiAtMjcuNzYgNjMuNDEgLTI4LjY5IDY0LjU4IEMtMjkuMjIgNjUuMjYgLTI5Ljc1IDY1Ljk0IC0zMC4yOSA2Ni42MyBDLTMwLjg1IDY3LjM1IC0zMS40MiA2OC4wNyAtMzIgNjguODEgQy00Ny4zNSA4OC42NiAtNjEuNzEgMTEwLjUxIC02Ny43OCAxMzUuMTYgQy02OS4zNSAxMzguODEgLTcwLjgzIDEzOS40MiAtNzQuMzggMTQxLjEyIEMtODEuOTEgMTQ1LjE4IC04Ny4yIDE1MC43OSAtOTMgMTU3IEMtOTMuOTkgMTU4LjAxIC05NC45OSAxNTkuMDEgLTk2IDE2MCBDLTk2LjIxIDE1My41NCAtOTYgMTQ4LjIgLTk0IDE0MiBDLTkzLjYyIDEzOS45NiAtOTMuMjUgMTM3LjkyIC05Mi44OCAxMzUuODggQy04OC4yMyAxMTQuMTcgLTc3LjM0IDk0LjI2IC02NSA3NiBDLTY0LjMgNzQuOTYgLTYzLjYxIDczLjkxIC02Mi44OSA3Mi44NCBDLTU3Ljk4IDY1LjU2IC01Mi42NCA1OC43MyAtNDcgNTIgQy00NS41NCA1MC4xOSAtNDQuMDggNDguMzggLTQyLjYyIDQ2LjU2IEMtMzguNDUgNDEuNDUgLTM0LjAzIDM2LjU5IC0yOS41NCAzMS43NiBDLTI3LjU2IDI5LjYgLTI1LjY0IDI3LjQyIC0yMy43NSAyNS4xOSBDLTE5LjUyIDIwLjI5IC0xNC44NSAxNS44MSAtMTAuMjQgMTEuMjggQy05LjYxIDEwLjY2IC04Ljk4IDEwLjAzIC04LjMzIDkuMzkgQy03Ljc2IDguODMgLTcuMTkgOC4yOCAtNi42MSA3LjcgQy01IDYgLTUgNiAtMy40MiAzLjc5IEMtMy4xOCAzLjQ5IC0zLjE4IDMuNDkgLTIgMiBDLTEuMzQgMiAtMC42OCAyIDAgMiBDMCAxLjM0IDAgMC42OCAwIDAgWiAiIGZpbGw9IiMzREFBRDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI3NCwyMSkiLz4KPHBhdGggZD0iTTAgMCBDNi4yNyAwIDEyLjU0IDAgMTkgMCBDMTkgNDEuOTEgMTkgODMuODIgMTkgMTI3IEMxMi43MyAxMjcgNi40NiAxMjcgMCAxMjcgQy0xLjUyIDEyMi41MSAtMS44OCAxMjEuMjkgLTEgMTE3IEMtMS40OCAxMTcuNDYgLTEuOTcgMTE3LjkyIC0yLjQ3IDExOC4zOSBDLTExLjY5IDEyNi44MyAtMTkuNjUgMTI5LjM4IC0zMi4xNyAxMjkuMjEgQy00Mi45OSAxMjguNDEgLTUxLjk2IDEyMi44NCAtNTkuMzcgMTE1LjEyIEMtNjIuNjYgMTEwLjg0IC02NC44MyAxMDUuOTIgLTY3IDEwMSBDLTY3LjM1IDEwMC4yMyAtNjcuNyA5OS40NyAtNjguMDYgOTguNjggQy02OS43OSA5My43NSAtNjkuMzcgODguNjEgLTY5LjM4IDgzLjQ0IEMtNjkuNCA4Mi4zMiAtNjkuNDIgODEuMiAtNjkuNDUgODAuMDUgQy02OS40OSA2Ny43IC02Ni4zMyA1OC4xNSAtNTggNDkgQy01Ny43MiA0OC42OCAtNTcuNzIgNDguNjggLTU2LjMxIDQ3LjAzIEMtNTIuMTIgNDIuNDQgLTQ3LjgyIDQwLjA4IC00MiAzOCBDLTQxLjQ2IDM3Ljc5IC00MS40NiAzNy43OSAtMzguNzUgMzYuNzUgQy0yOS4wMSAzNC44IC0xOC44NiAzNS4xOCAtMTAgNDAgQy02Ljg5IDQyLjU1IC0zLjkzIDQ1LjI0IC0xIDQ4IEMtMS4wMyA0Ny40IC0xLjA2IDQ2LjggLTEuMDkgNDYuMTggQy0xLjM4IDM5Ljk1IC0xLjU0IDMzLjczIC0xLjYyIDI3LjQ5IEMtMS42NiAyNS4xNiAtMS43NSAyMi44MyAtMS44NiAyMC41MSBDLTIuMDIgMTcuMTcgLTIuMDYgMTMuODQgLTIuMDcgMTAuNSBDLTIuMTUgOS40NSAtMi4yMyA4LjQgLTIuMzEgNy4zMiBDLTIuMjUgNC40MSAtMi4yNSA0LjQxIDAgMCBaICIgZmlsbD0iIzJCODlCRSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODM1LDEwMCkiLz4KPHBhdGggZD0iTTAgMCBDMi40NSAxLjkyIDMuNjcgMy4yOCA1LjQ0IDUuOTQgQzUuMyA1LjE0IDUuMTYgNC4zNSA1LjAyIDMuNTMgQzQuODEgMC40NCA0LjgxIDAuNDQgNi40NCAtNS4wNiBDMTIuMzggLTUuMDYgMTguMzIgLTUuMDYgMjQuNDQgLTUuMDYgQzI0LjQ0IDI0LjMxIDI0LjQ0IDUzLjY4IDI0LjQ0IDgzLjk0IEMxOC41IDgzLjk0IDEyLjU2IDgzLjk0IDYuNDQgODMuOTQgQzYuNDQgNzkuOTggNi40NCA3Ni4wMiA2LjQ0IDcxLjk0IEM1Ljc4IDcxLjk0IDUuMTIgNzEuOTQgNC40NCA3MS45NCBDNC4xOSA3Mi40OSAzLjk0IDczLjA1IDMuNjkgNzMuNjIgQzAuMzUgNzkuOCAtNi4wMSA4Mi41NCAtMTIuMjkgODQuOTggQy0yMi4yOCA4Ny44OSAtMzIuMTUgODUuOTYgLTQxLjU2IDgxLjk0IEMtNTIuMjMgNzYuMDEgLTU5LjY2IDY1LjcgLTYzLjEgNTQuMTIgQy02Ni4xMSAzOS44NSAtNjQuODIgMjMuNjcgLTU2LjkyIDExLjM4IEMtNTAuNzIgMi44NiAtNDIuNTYgLTQgLTMyLjE3IC02LjY4IEMtMjAuMyAtOC40MiAtOS44MyAtNy4wOCAwIDAgWiAiIGZpbGw9IiMyQjgzQkEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU4OC41NjI1LDE0My4wNjI1KSIvPgo8cGF0aCBkPSJNMCAwIEMzLjU2IDIuNzkgNi44MyA1Ljc4IDEwIDkgQzkuODYgOC4yMSA5LjczIDcuNDEgOS41OSA2LjU5IEM5LjM4IDMuNSA5LjM4IDMuNSAxMSAtMiBDMTYuOTQgLTIgMjIuODggLTIgMjkgLTIgQzI5IDI3LjM3IDI5IDU2Ljc0IDI5IDg3IEMyMy4wNiA4NyAxNy4xMiA4NyAxMSA4NyBDOS42MyA4MS45MyA5LjIzIDc5Ljg3IDEwIDc1IEM5LjYyIDc1LjUyIDkuNjIgNzUuNTIgNy42OSA3OC4xMiBDMS41MyA4NS4zMyAtNi41OSA4OC40NiAtMTUuODIgODkuMjQgQy0yOC4xNyA4OS41NiAtMzguMDEgODUuMjQgLTQ3LjE2IDc3LjA3IEMtNTYuNzMgNjcuMyAtNTkuMTggNTQuOTkgLTU5LjI1IDQxLjgxIEMtNTkuMjcgNDAuOTIgLTU5LjI5IDQwLjAyIC01OS4zMSAzOS4xIEMtNTkuMzggMjYuODkgLTU1LjA5IDE2LjQ2IC00NyA3LjMxIEMtMzQuOCAtNC4yMyAtMTQuOTIgLTguNDcgMCAwIFogIiBmaWxsPSIjMjk4MkI5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3MjMsMTQwKSIvPgo8cGF0aCBkPSJNMCAwIEM4LjgxIDYuMzQgMTIuNDggMTMuOTQgMTQuNSAyNC40NiBDMTQuODcgMjkuMjcgMTQuODUgMzQuMDUgMTQuNzkgMzguODggQzE0Ljc4IDQwLjIzIDE0Ljc4IDQxLjU4IDE0Ljc4IDQyLjkzIEMxNC43NiA0Ni40NSAxNC43NCA0OS45NyAxNC43IDUzLjQ5IEMxNC42NyA1Ny4xIDE0LjY2IDYwLjcgMTQuNjQgNjQuMzEgQzE0LjYxIDcxLjM2IDE0LjU2IDc4LjQxIDE0LjUgODUuNDYgQzguODYgODYuOTIgMy4yIDg3Ljk4IC0yLjU2IDg2LjY2IEMtNC41IDg1LjQ2IC00LjUgODUuNDYgLTUuNTcgODMuMTcgQy03LjA3IDc1LjM2IC02LjU0IDY3LjM0IC02LjE2IDU5LjQ0IEMtNi4wMSA1Ni4wNyAtNS45NiA1Mi43IC01LjkgNDkuMzMgQy01Ljg0IDQ1LjUzIC01Ljc2IDQxLjc0IC01LjYxIDM3Ljk0IEMtNS4wOSAyMy41NyAtNS4wOSAyMy41NyAtMTAuMjUgMTcuNjQgQy0xNC43MiAxMi44OCAtMTkuMDMgMTIuMzQgLTI1LjM4IDEyLjAyIEMtMzIuNzEgMTIuMTUgLTM2LjgxIDE0LjY5IC00MS44MiAxOS44MyBDLTQ2LjggMjcuNTggLTQ2Ljc1IDMzLjMyIC00Ni4zNSA0Mi4zOSBDLTQ2LjI5IDQ0LjkyIC00Ni4yNCA0Ny40NSAtNDYuMiA0OS45OCBDLTQ2LjExIDUzLjk2IC00Ni4wMSA1Ny45NCAtNDUuODEgNjEuOTIgQy00NS42MyA2NS43NiAtNDUuNTcgNjkuNiAtNDUuNTQgNzMuNDUgQy00NS40NSA3NC42NiAtNDUuMzYgNzUuODYgLTQ1LjI4IDc3LjEgQy00NS4zIDgwLjQzIC00NS4zIDgwLjQzIC00Ny41IDg1LjQ2IEMtNTMuNzcgODUuNDYgLTYwLjA0IDg1LjQ2IC02Ni41IDg1LjQ2IEMtNjYuNSA1Ni4wOSAtNjYuNSAyNi43MiAtNjYuNSAtMy41NCBDLTYwLjU2IC0zLjU0IC01NC42MiAtMy41NCAtNDguNSAtMy41NCBDLTQ3LjEgMS4yMSAtNDYuNzIgMi45IC00Ny41IDcuNDYgQy00Ni45MSA2LjU5IC00Ni4zMSA1LjcyIC00NS42OSA0LjgzIEMtMzQuNTIgLTguNjggLTEzLjk2IC04LjYgMCAwIFogIiBmaWxsPSIjMkI4N0JDIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0OTYuNTAzOTA2MjUsMTQxLjU0Mjk2ODc1KSIvPgo8cGF0aCBkPSJNMCAwIEM0LjczIDIuMzggOS40NCA0Ljc5IDE0LjEzIDcuMjUgQzI3LjE5IDE0LjAxIDM5LjI1IDE3LjM3IDUzLjg4IDE3LjQ0IEM1NC45MSAxNy40NiA1NS45NSAxNy40OCA1Ny4wMiAxNy41IEM2My45NCAxNy41MyA2OS42OSAxNi41NCA3Ni4xOSAxNC4xOSBDNzcuMzggMTMuOCA3OC41OCAxMy40IDc5LjgxIDEzIEM4MC42IDEyLjczIDgxLjM4IDEyLjQ2IDgyLjE5IDEyLjE5IEM3My4zOCAyNy4wMiA2MC44MiAzNi41MiA0NC44OCA0Mi42MiBDNDQuMjMgNDIuODcgNDMuNTggNDMuMTIgNDIuOTIgNDMuMzcgQzI2LjA0IDQ5LjQzIDUuNDMgNDcuNjYgLTEwLjcxIDQwLjMzIEMtMjMuMjUgMzQuMjEgLTM0Ljg1IDI1LjQ3IC00MS44MSAxMy4xOSBDLTQzLjM4IDguNSAtNDMuNzggNC4wNiAtNDIuODEgLTAuODEgQy0zMS4zNCAtMTYuMTMgLTEzLjU3IC02Ljc4IDAgMCBaICIgZmlsbD0iI0Y4RkNGQyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjU1LjgxMjUsMjE4LjgxMjUpIi8+CjxwYXRoIGQ9Ik0wIDAgQzAuNTkgLTAuMDEgMC41OSAtMC4wMSAzLjU5IC0wLjA1IEMxMC4zOCAwLjY2IDE1LjQ0IDQuNSAyMC4wNiA5LjMxIEMyNi4wNiAxNy41NiAyNy4xIDI2LjM5IDI2LjA2IDM2LjMxIEMyMy43NiA0NC4yOSAyMC4zNiA1MS42OSAxMyA1Ni4wNiBDMTIuMzMgNTYuNDcgMTEuNjYgNTYuODggMTAuOTYgNTcuMyBDNS42MiA2MC4xNSAtMC4wNCA1OS45NCAtNS45NCA1OS4zMSBDLTEyLjc4IDU3LjE4IC0xOC4yIDUzLjQ3IC0yMS45NCA0Ny4zMSBDLTI2LjYgMzguMzYgLTI3LjU1IDI4LjgzIC0yNS4xMiAxOS4wNCBDLTIyLjE5IDEwLjk1IC0xNy4zMyA1LjA1IC05LjU5IDEuMTIgQy02LjMxIDAuMTIgLTMuNDMgMC4wMSAwIDAgWiAiIGZpbGw9IiNGOEZDRkMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcwNy45Mzc1LDE1Mi42ODc1KSIvPgo8cGF0aCBkPSJNMCAwIEM2LjMyIDQuMTcgMTAuODEgOS42MiAxMyAxNi45NCBDMTMuNDYgMjAuMjIgMTMuNTIgMjMuNDQgMTMuNSAyNi43NSBDMTMuNSAyNy42NCAxMy40OSAyOC41MiAxMy40OSAyOS40MyBDMTMuMjYgMzcuOTggMTEuMDUgNDMuNDQgNS40NCA0OS44OCBDLTEuNDIgNTUuNjggLTYuNTUgNTcuNTIgLTE1LjYzIDU3LjM5IEMtMjIuMTMgNTYuNTIgLTI2Ljc3IDUzLjExIC0zMS4zOCA0OC42MiBDLTM3LjI3IDM4Ljg4IC0zOS43OSAyOS4yOCAtMzcuMzUgMTcuOTIgQy0zNC43OSAxMC4xIC0zMC41MiAzLjc5IC0yMy40NCAtMC41NiBDLTE2LjIyIC0zLjY5IC02Ljk5IC0zLjU3IDAgMCBaICIgZmlsbD0iI0Y4RkNGRCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTgxLDE1NS4wNjI1KSIvPgo8cGF0aCBkPSJNMCAwIEM2LjIgMy43MiAxMi4xMyAxMC4wOCAxNC4yOSAxNy4wNyBDMTUuOTEgMjcuMTggMTYuMDggMzguMzcgOS45OSA0Ni45NiBDNS4wMiA1Mi45OSAwLjQ3IDU2LjkzIC03LjM5IDU3Ljk3IEMtMTUuOTYgNTguMzcgLTIxLjY0IDU2LjY5IC0yOC4wNSA1MS4wMiBDLTM1LjAyIDQzLjcxIC0zNi45MiAzNS4yNyAtMzYuNzggMjUuMzkgQy0zNi4zOSAxNi42IC0zMy4yIDEwLjYyIC0yNy4yMSA0LjI5IEMtMTkuODUgLTIuNDIgLTkuMjggLTMuOTcgMCAwIFogIiBmaWxsPSIjRjhGQ0ZDIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4MjAuMzEyNSwxNTQuNDM3NSkiLz4KPHBhdGggZD0iTTAgMCBDNi4yNyAwIDEyLjU0IDAgMTkgMCBDMTkgMjkuMzcgMTkgNTguNzQgMTkgODkgQzEyLjczIDg5IDYuNDYgODkgMCA4OSBDMCA1OS42MyAwIDMwLjI2IDAgMCBaICIgZmlsbD0iIzJEODRCQSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjMxLDEzOCkiLz4KPHBhdGggZD0iTTAgMCBDMy4wMyAzLjkzIDUuNjUgOC4wNiA4LjI4IDEyLjI2IEM5LjI3IDEzLjg0IDEwLjI5IDE1LjQyIDExLjM0IDE2Ljk2IEMxMy45IDIwLjg1IDE0LjczIDI0LjIxIDE0LjUyIDI4Ljc5IEMxMy41OCAzMi43NiAxMS4wOSAzNS40NCA4IDM4IEM0LjIyIDQwLjIzIDEuNCA0MC4zOCAtMyA0MCBDLTguMTQgMzguMTkgLTEwLjYzIDM1LjkyIC0xMyAzMSBDLTE1LjE2IDE5LjEyIC02LjIgOS4yOSAwIDAgWiAiIGZpbGw9IiMzRDlFQzgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY0MCw4NykiLz4KPC9zdmc+Cg==";

  const copyToClipboard = (text, colorName) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(colorName);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const sections = [
    { id: 'overview', label: 'Visão Geral', icon: '◊' },
    { id: 'colors', label: 'Cores', icon: '●' },
    { id: 'typography', label: 'Tipografia', icon: 'Aa' },
    { id: 'logo', label: 'Logotipo', icon: '◐' },
    { id: 'voice', label: 'Tom de Voz', icon: '❝' },
    { id: 'applications', label: 'Aplicações', icon: '▣' },
  ];

  const primaryColors = [
    { name: 'Naiad Ocean', hex: '#2F79B7', rgb: '47, 121, 183', usage: 'Cor principal da marca. Use em elementos primários, cabeçalhos e CTAs.' },
    { name: 'Naiad Azure', hex: '#3DAAD0', rgb: '61, 170, 208', usage: 'Destaques e gradientes. Representa fluidez e movimento.' },
    { name: 'Naiad Marine', hex: '#2B89BE', rgb: '43, 137, 190', usage: 'Textos em fundos claros e elementos secundários.' },
    { name: 'Naiad Deep', hex: '#2982B9', rgb: '41, 130, 185', usage: 'Variações de profundidade e camadas visuais.' },
  ];

  const accentColors = [
    { name: 'Naiad Teal', hex: '#3D9EC8', rgb: '61, 158, 200', usage: 'Acentos e detalhes decorativos.' },
    { name: 'Naiad Vivid', hex: '#0052CC', rgb: '0, 82, 204', usage: 'Fundos de apresentações e materiais institucionais.' },
    { name: 'Naiad Glow', hex: '#00E676', rgb: '0, 230, 118', usage: 'Destaques de performance, dados positivos e CTAs de alta conversão.' },
    { name: 'Naiad Forest', hex: '#004D40', rgb: '0, 77, 64', usage: 'Seções de contraste e dados técnicos.' },
  ];

  const neutralColors = [
    { name: 'Naiad White', hex: '#FDFEFE', rgb: '253, 254, 254', usage: 'Fundos principais e espaço negativo.' },
    { name: 'Naiad Pearl', hex: '#F8FCFC', rgb: '248, 252, 252', usage: 'Fundos secundários e cards.' },
    { name: 'Naiad Slate', hex: '#1A1A2E', rgb: '26, 26, 46', usage: 'Textos primários e elementos escuros.' },
    { name: 'Naiad Mist', hex: '#E8F4F8', rgb: '232, 244, 248', usage: 'Fundos suaves e áreas de respiro.' },
  ];

  const ColorSwatch = ({ color, size = 'large' }) => (
    <div 
      className={`relative group cursor-pointer transition-all duration-300 ${size === 'large' ? 'w-full' : 'w-16 h-16'}`}
      onClick={() => copyToClipboard(color.hex, color.name)}
    >
      <div 
        className={`${size === 'large' ? 'h-32 rounded-2xl' : 'h-16 rounded-xl'} w-full transition-transform duration-300 group-hover:scale-[1.02]`}
        style={{ backgroundColor: color.hex }}
      />
      {size === 'large' && (
        <div className="mt-4 space-y-1">
          <h4 className="font-semibold text-slate-800">{color.name}</h4>
          <div className="flex gap-4 text-sm text-slate-500 font-mono">
            <span>{color.hex}</span>
            <span>RGB({color.rgb})</span>
          </div>
          <p className="text-sm text-slate-600 mt-2">{color.usage}</p>
        </div>
      )}
      <div className={`absolute inset-0 ${size === 'large' ? 'rounded-2xl' : 'rounded-xl'} bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center`}>
        <span className={`text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium ${copiedColor === color.name ? 'opacity-100' : ''}`}>
          {copiedColor === color.name ? '✓ Copiado!' : 'Copiar HEX'}
        </span>
      </div>
    </div>
  );

  const renderOverview = () => (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#2F79B7] via-[#3DAAD0] to-[#2982B9] p-12 text-white">
        <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path d="M100 20 C120 60, 140 80, 100 180 C60 80, 80 60, 100 20" fill="currentColor" />
            <path d="M40 120 Q100 100, 160 120 Q100 140, 40 120" fill="currentColor" />
          </svg>
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <img src={naiadLogo} alt="Naiad Logo" className="h-16 w-auto" />
            <div>
              <p className="text-white/80 text-lg">Brand Guidelines</p>
            </div>
          </div>
          <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
            Na mitologia grega, as Naiads eram ninfas que presidiam fontes, poços, nascentes, córregos e outros corpos de água doce. Nossa marca captura essa essência de pureza, fluidez e transformação.
          </p>
        </div>
      </div>

      {/* Brand Essence */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gradient-to-br from-[#F8FCFC] to-[#E8F4F8] p-8 rounded-2xl border border-[#3DAAD0]/20">
          <div className="w-12 h-12 bg-[#2F79B7] rounded-xl flex items-center justify-center text-white text-xl mb-4">◊</div>
          <h3 className="text-xl font-semibold text-[#2F79B7] mb-3">Missão</h3>
          <p className="text-slate-600 leading-relaxed">
            Garantir o fornecimento confiável de produtos químicos de alto padrão, com excelente custo-benefício, contribuindo para o sucesso dos nossos clientes.
          </p>
        </div>
        <div className="bg-gradient-to-br from-[#F8FCFC] to-[#E8F4F8] p-8 rounded-2xl border border-[#3DAAD0]/20">
          <div className="w-12 h-12 bg-[#3DAAD0] rounded-xl flex items-center justify-center text-white text-xl mb-4">◎</div>
          <h3 className="text-xl font-semibold text-[#2F79B7] mb-3">Visão</h3>
          <p className="text-slate-600 leading-relaxed">
            Ser referência global em soluções químicas industriais, levando inovação e eficiência para tratamento de água em todo o mundo.
          </p>
        </div>
        <div className="bg-gradient-to-br from-[#F8FCFC] to-[#E8F4F8] p-8 rounded-2xl border border-[#3DAAD0]/20">
          <div className="w-12 h-12 bg-[#2982B9] rounded-xl flex items-center justify-center text-white text-xl mb-4">✧</div>
          <h3 className="text-xl font-semibold text-[#2F79B7] mb-3">Valores</h3>
          <p className="text-slate-600 leading-relaxed">
            Qualidade, eficiência, sustentabilidade, customização e compromisso com a excelência em cada solução entregue.
          </p>
        </div>
      </div>

      {/* Tagline */}
      <div className="text-center py-12 border-y border-[#3DAAD0]/20">
        <p className="text-sm uppercase tracking-[0.3em] text-[#3DAAD0] mb-4">Tagline</p>
        <h2 className="text-4xl md:text-5xl font-light text-[#2F79B7]">
          Qualidade que <span className="font-semibold text-[#00E676]">transforma!</span>
        </h2>
      </div>

      {/* Brand Pillars */}
      <div>
        <h3 className="text-2xl font-semibold text-[#2F79B7] mb-6">Pilares da Marca</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { title: 'Presença Global', desc: 'Atuação em diversos países' },
            { title: 'Alta Capacidade', desc: '+1.200.000 t/ano' },
            { title: 'Customização', desc: 'Soluções sob medida' },
            { title: 'Certificação', desc: 'Qualidade garantida' },
          ].map((pillar, i) => (
            <div key={i} className="bg-[#0052CC] text-white p-6 rounded-2xl">
              <div className="text-[#00E676] text-3xl font-bold mb-2">0{i + 1}</div>
              <h4 className="font-semibold text-lg mb-1">{pillar.title}</h4>
              <p className="text-white/70 text-sm">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderColors = () => (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-semibold text-[#2F79B7] mb-2">Paleta de Cores</h2>
        <p className="text-slate-600 mb-8">Clique em qualquer cor para copiar o código HEX.</p>
      </div>

      {/* Primary Colors */}
      <div>
        <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#2F79B7]"></span>
          Cores Primárias
        </h3>
        <p className="text-slate-600 mb-6">As cores primárias representam a essência da água: profundidade, clareza e vida.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {primaryColors.map((color) => (
            <ColorSwatch key={color.hex} color={color} />
          ))}
        </div>
      </div>

      {/* Accent Colors */}
      <div>
        <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#00E676]"></span>
          Cores de Destaque
        </h3>
        <p className="text-slate-600 mb-6">Usadas para criar contraste e destacar informações importantes.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {accentColors.map((color) => (
            <ColorSwatch key={color.hex} color={color} />
          ))}
        </div>
      </div>

      {/* Neutral Colors */}
      <div>
        <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-slate-400"></span>
          Cores Neutras
        </h3>
        <p className="text-slate-600 mb-6">Base para layouts, garantindo legibilidade e equilíbrio visual.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {neutralColors.map((color) => (
            <ColorSwatch key={color.hex} color={color} />
          ))}
        </div>
      </div>

      {/* Gradient Examples */}
      <div>
        <h3 className="text-xl font-semibold text-slate-800 mb-4">Gradientes Aprovados</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="h-40 rounded-2xl bg-gradient-to-r from-[#2F79B7] to-[#3DAAD0] flex items-end p-4">
            <span className="text-white text-sm font-mono">Ocean → Azure</span>
          </div>
          <div className="h-40 rounded-2xl bg-gradient-to-br from-[#0052CC] to-[#2982B9] flex items-end p-4">
            <span className="text-white text-sm font-mono">Vivid → Deep</span>
          </div>
          <div className="h-40 rounded-2xl bg-gradient-to-r from-[#2F79B7] via-[#3DAAD0] to-[#00E676] flex items-end p-4">
            <span className="text-white text-sm font-mono">Performance Gradient</span>
          </div>
        </div>
      </div>

      {/* Color Combinations */}
      <div className="bg-[#F8FCFC] p-8 rounded-2xl">
        <h3 className="text-xl font-semibold text-slate-800 mb-6">Combinações Recomendadas</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#0052CC] p-6 rounded-xl">
            <p className="text-[#00E676] font-semibold mb-2">Texto destaque</p>
            <p className="text-white">Texto regular em fundo azul</p>
            <p className="text-white/70 text-sm mt-2">Uso: Apresentações e materiais institucionais</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-[#3DAAD0]/30">
            <p className="text-[#2F79B7] font-semibold mb-2">Título em Ocean Blue</p>
            <p className="text-slate-600">Texto regular em fundo claro</p>
            <p className="text-slate-400 text-sm mt-2">Uso: Documentos e website</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTypography = () => (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-semibold text-[#2F79B7] mb-2">Tipografia</h2>
        <p className="text-slate-600 mb-8">A tipografia da Naiad comunica profissionalismo, clareza e modernidade.</p>
      </div>

      {/* Primary Font */}
      <div className="bg-gradient-to-br from-[#F8FCFC] to-white p-8 rounded-2xl border border-[#3DAAD0]/20">
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-sm uppercase tracking-wider text-[#3DAAD0] mb-2">Fonte Principal</p>
            <h3 className="text-4xl font-light text-slate-800" style={{ fontFamily: 'system-ui' }}>Montserrat</h3>
          </div>
          <a href="https://fonts.google.com/specimen/Montserrat" target="_blank" rel="noopener noreferrer" 
             className="text-sm text-[#2F79B7] hover:underline">Google Fonts ↗</a>
        </div>
        <div className="space-y-4">
          <div className="flex items-baseline gap-4 border-b border-slate-100 pb-4">
            <span className="text-sm text-slate-400 w-24">Light</span>
            <span className="text-3xl font-light">Qualidade que transforma</span>
          </div>
          <div className="flex items-baseline gap-4 border-b border-slate-100 pb-4">
            <span className="text-sm text-slate-400 w-24">Regular</span>
            <span className="text-3xl font-normal">Qualidade que transforma</span>
          </div>
          <div className="flex items-baseline gap-4 border-b border-slate-100 pb-4">
            <span className="text-sm text-slate-400 w-24">Medium</span>
            <span className="text-3xl font-medium">Qualidade que transforma</span>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-sm text-slate-400 w-24">Bold</span>
            <span className="text-3xl font-bold">Qualidade que transforma</span>
          </div>
        </div>
      </div>

      {/* Type Scale */}
      <div>
        <h3 className="text-xl font-semibold text-slate-800 mb-6">Escala Tipográfica</h3>
        <div className="space-y-6">
          {[
            { name: 'Display', size: '48px', weight: 'Light', sample: 'Naiad' },
            { name: 'Heading 1', size: '36px', weight: 'Semibold', sample: 'Qualidade que transforma' },
            { name: 'Heading 2', size: '28px', weight: 'Semibold', sample: 'Nossos diferenciais' },
            { name: 'Heading 3', size: '22px', weight: 'Medium', sample: 'Presença Global' },
            { name: 'Body Large', size: '18px', weight: 'Regular', sample: 'A Naiad é especializada em soluções químicas industriais.' },
            { name: 'Body', size: '16px', weight: 'Regular', sample: 'Oferecendo produtos e tecnologias desenvolvidos para atender às demandas específicas.' },
            { name: 'Caption', size: '14px', weight: 'Regular', sample: 'www.naiad.com.br' },
          ].map((type) => (
            <div key={type.name} className="flex items-baseline gap-6 border-b border-slate-100 pb-4">
              <div className="w-32 flex-shrink-0">
                <p className="text-sm font-medium text-[#2F79B7]">{type.name}</p>
                <p className="text-xs text-slate-400">{type.size} / {type.weight}</p>
              </div>
              <p className="text-slate-800" style={{ fontSize: type.size, fontWeight: type.weight === 'Light' ? 300 : type.weight === 'Semibold' ? 600 : type.weight === 'Medium' ? 500 : 400 }}>
                {type.sample}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
          <h4 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
            <span className="text-green-500">✓</span> Faça
          </h4>
          <ul className="space-y-2 text-green-700 text-sm">
            <li>• Use hierarquia clara entre títulos e corpo</li>
            <li>• Mantenha contraste adequado (mín. 4.5:1)</li>
            <li>• Alinhe textos à esquerda em blocos longos</li>
            <li>• Use espaçamento generoso entre linhas (1.5)</li>
          </ul>
        </div>
        <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
          <h4 className="font-semibold text-red-800 mb-4 flex items-center gap-2">
            <span className="text-red-500">✗</span> Evite
          </h4>
          <ul className="space-y-2 text-red-700 text-sm">
            <li>• Textos em ALL CAPS extensos</li>
            <li>• Fontes decorativas ou fantasia</li>
            <li>• Mais de 3 pesos em uma mesma página</li>
            <li>• Linhas com mais de 80 caracteres</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderLogo = () => (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-semibold text-[#2F79B7] mb-2">Logotipo</h2>
        <p className="text-slate-600 mb-8">O símbolo da Naiad representa uma gota d'água com ondas fluidas, simbolizando pureza, movimento e transformação.</p>
      </div>

      {/* Main Logo Display */}
      <div className="bg-gradient-to-br from-[#F8FCFC] to-white p-12 rounded-3xl border border-[#3DAAD0]/20 flex items-center justify-center">
        <div className="text-center">
          <img src={naiadLogo} alt="Naiad Logo" className="h-24 w-auto mx-auto" />
        </div>
      </div>

      {/* Logo Versions */}
      <div>
        <h3 className="text-xl font-semibold text-slate-800 mb-6">Versões do Logotipo</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 flex flex-col items-center">
            <img src={naiadLogo} alt="Naiad Logo" className="h-12 w-auto mb-4" />
            <p className="text-sm text-slate-500">Principal - Horizontal</p>
          </div>
          <div className="bg-[#0052CC] p-8 rounded-2xl flex flex-col items-center">
            <img src={naiadLogo} alt="Naiad Logo Negativo" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm text-white/70">Versão Negativa</p>
          </div>
          <div className="bg-slate-100 p-8 rounded-2xl flex flex-col items-center">
            <img src={naiadLogo} alt="Naiad Logo Mono" className="h-12 w-auto mb-4 grayscale" />
            <p className="text-sm text-slate-500">Monocromática</p>
          </div>
        </div>
      </div>

      {/* Clear Space */}
      <div>
        <h3 className="text-xl font-semibold text-slate-800 mb-6">Área de Proteção</h3>
        <div className="bg-[#F8FCFC] p-8 rounded-2xl">
          <div className="flex items-center justify-center">
            <div className="relative border-2 border-dashed border-[#3DAAD0] p-8 rounded-xl">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F8FCFC] px-2 text-xs text-[#3DAAD0]">X</div>
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 bg-[#F8FCFC] px-2 text-xs text-[#3DAAD0]">X</div>
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 bg-[#F8FCFC] px-2 text-xs text-[#3DAAD0]">X</div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#F8FCFC] px-2 text-xs text-[#3DAAD0]">X</div>
              <img src={naiadLogo} alt="Naiad Logo" className="h-10 w-auto" />
            </div>
          </div>
          <p className="text-center text-sm text-slate-500 mt-6">X = altura do símbolo da gota</p>
        </div>
      </div>

      {/* Minimum Size */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-200">
          <h4 className="font-semibold text-slate-800 mb-4">Tamanho Mínimo</h4>
          <div className="flex items-end gap-8">
            <div className="text-center">
              <img src={naiadLogo} alt="Naiad Logo" className="h-8 w-auto mb-2" />
              <p className="text-xs text-slate-500">Digital: 80px</p>
            </div>
            <div className="text-center">
              <img src={naiadLogo} alt="Naiad Logo" className="h-5 w-auto mb-2" />
              <p className="text-xs text-slate-500">Impresso: 20mm</p>
            </div>
          </div>
        </div>
        <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
          <h4 className="font-semibold text-red-800 mb-4">Uso Incorreto</h4>
          <div className="grid grid-cols-2 gap-4 text-xs text-red-600">
            <div className="flex items-center gap-2">
              <span>✗</span>
              <span>Não distorça</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✗</span>
              <span>Não rotacione</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✗</span>
              <span>Não altere cores</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✗</span>
              <span>Não adicione efeitos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderVoice = () => (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-semibold text-[#2F79B7] mb-2">Tom de Voz</h2>
        <p className="text-slate-600 mb-8">A comunicação da Naiad é profissional, confiável e orientada a resultados.</p>
      </div>

      {/* Voice Attributes */}
      <div className="grid md:grid-cols-4 gap-6">
        {[
          { attr: 'Profissional', desc: 'Expertise técnica com linguagem acessível', icon: '◆' },
          { attr: 'Confiável', desc: 'Dados e fatos que sustentam nossas promessas', icon: '◈' },
          { attr: 'Inovador', desc: 'Soluções que transformam desafios em resultados', icon: '◇' },
          { attr: 'Parceiro', desc: 'Proximidade e customização para cada cliente', icon: '◊' },
        ].map((item) => (
          <div key={item.attr} className="text-center p-6 bg-gradient-to-b from-[#F8FCFC] to-white rounded-2xl border border-[#3DAAD0]/20">
            <div className="text-4xl text-[#3DAAD0] mb-4">{item.icon}</div>
            <h4 className="font-semibold text-[#2F79B7] mb-2">{item.attr}</h4>
            <p className="text-sm text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Writing Examples */}
      <div>
        <h3 className="text-xl font-semibold text-slate-800 mb-6">Exemplos de Escrita</h3>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <div className="flex gap-4 mb-4">
              <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">✓ Correto</span>
            </div>
            <p className="text-lg text-slate-800">"Os produtos NAIAD apresentaram redução de 51% no consumo em comparação ao concorrente, gerando economia de até 26% nos custos mensais."</p>
            <p className="text-sm text-slate-500 mt-2">→ Dados específicos, resultado mensurável, benefício claro</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <div className="flex gap-4 mb-4">
              <span className="bg-red-100 text-red-700 text-xs px-3 py-1 rounded-full">✗ Evitar</span>
            </div>
            <p className="text-lg text-slate-400">"Nossos produtos são os melhores do mercado e vão revolucionar sua operação!"</p>
            <p className="text-sm text-slate-500 mt-2">→ Vago, sem dados, linguagem sensacionalista</p>
          </div>
        </div>
      </div>

      {/* Key Messages */}
      <div className="bg-[#0052CC] p-8 rounded-2xl text-white">
        <h3 className="text-xl font-semibold mb-6">Mensagens-Chave</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            'Qualidade é o que nos move',
            'Soluções que transformam água em resultados',
            'Parceria global, atendimento local',
            'Performance comprovada, economia garantida',
          ].map((msg, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-[#00E676] text-xl">»</span>
              <span className="text-white/90">{msg}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Terminology */}
      <div>
        <h3 className="text-xl font-semibold text-slate-800 mb-6">Terminologia Preferida</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { use: 'Soluções químicas', avoid: 'Produtos químicos' },
            { use: 'Parceiros', avoid: 'Clientes' },
            { use: 'Performance', avoid: 'Desempenho' },
            { use: 'Customização', avoid: 'Personalização' },
            { use: 'Eficiência operacional', avoid: 'Economia' },
            { use: 'Tratamento de água', avoid: 'Limpeza de água' },
          ].map((term, i) => (
            <div key={i} className="bg-[#F8FCFC] p-4 rounded-xl">
              <p className="text-[#2F79B7] font-medium">{term.use}</p>
              <p className="text-slate-400 text-sm line-through">{term.avoid}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderApplications = () => (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-semibold text-[#2F79B7] mb-2">Aplicações</h2>
        <p className="text-slate-600 mb-8">Exemplos de como aplicar a identidade visual em diferentes materiais.</p>
      </div>

      {/* Business Card */}
      <div>
        <h3 className="text-xl font-semibold text-slate-800 mb-6">Cartão de Visita</h3>
        <div className="flex gap-6 justify-center flex-wrap">
          <div className="w-80 h-48 bg-gradient-to-br from-[#0052CC] to-[#2F79B7] rounded-xl p-6 text-white shadow-xl">
            <img src={naiadLogo} alt="Naiad" className="h-8 w-auto mb-8 brightness-0 invert" />
            <p className="font-semibold">Sara Oliveira</p>
            <p className="text-white/70 text-sm">Consultora Comercial</p>
            <div className="mt-4 text-sm text-white/80">
              <p>+55 (62) 99993-3283</p>
              <p>sara@naiad.com.br</p>
            </div>
          </div>
          <div className="w-80 h-48 bg-white rounded-xl p-6 shadow-xl border border-slate-100">
            <div className="h-full flex flex-col justify-between">
              <div className="text-right text-sm text-slate-400">
                <p>www.naiad.com.br</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-light text-[#2F79B7]">Qualidade que</p>
                <p className="text-2xl font-semibold text-[#00E676]">transforma!</p>
              </div>
              <div className="flex justify-center">
                <div className="flex items-center gap-2 text-[#3DAAD0] text-sm">
                  <span>●</span>
                  <span>LinkedIn</span>
                  <span>●</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Letterhead */}
      <div>
        <h3 className="text-xl font-semibold text-slate-800 mb-6">Papel Timbrado</h3>
        <div className="bg-white rounded-xl shadow-xl p-8 max-w-2xl mx-auto border border-slate-100">
          <div className="flex justify-between items-start mb-12">
            <img src={naiadLogo} alt="Naiad" className="h-10 w-auto" />
            <div className="text-right text-xs text-slate-400">
              <p>www.naiad.com.br</p>
              <p>contato@naiad.com.br</p>
              <p>+55 (62) 99993-3283</p>
            </div>
          </div>
          <div className="border-t-2 border-[#3DAAD0] pt-6 space-y-4">
            <p className="text-slate-300">Lorem ipsum dolor sit amet...</p>
            <p className="text-slate-300">Consectetur adipiscing elit...</p>
            <p className="text-slate-300">Sed do eiusmod tempor...</p>
          </div>
          <div className="mt-12 pt-4 border-t border-slate-100 flex items-center justify-between">
            <p className="text-[#00E676] font-medium text-sm">Qualidade que transforma!</p>
            <div className="h-1 w-24 bg-gradient-to-r from-[#2F79B7] to-[#3DAAD0] rounded"></div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div>
        <h3 className="text-xl font-semibold text-slate-800 mb-6">Redes Sociais</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="aspect-square bg-[#0052CC] rounded-2xl p-6 flex flex-col justify-between">
            <img src={naiadLogo} alt="Naiad" className="h-6 w-auto brightness-0 invert" />
            <div>
              <p className="text-4xl font-bold text-[#00E676]">51%</p>
              <p className="text-white/80 text-sm">redução no consumo</p>
            </div>
          </div>
          <div className="aspect-square bg-gradient-to-br from-[#2F79B7] to-[#3DAAD0] rounded-2xl p-6 flex items-center justify-center">
            <div className="text-center text-white">
              <p className="text-lg font-light mb-2">Qualidade que</p>
              <p className="text-3xl font-semibold">transforma!</p>
            </div>
          </div>
          <div className="aspect-square bg-[#004D40] rounded-2xl p-6 flex flex-col justify-between">
            <p className="text-white/60 text-sm">Capacidade Produtiva</p>
            <div>
              <p className="text-3xl font-bold text-[#00E676]">+1.2M</p>
              <p className="text-white/80">toneladas/ano</p>
            </div>
          </div>
        </div>
      </div>

      {/* Email Signature */}
      <div>
        <h3 className="text-xl font-semibold text-slate-800 mb-6">Assinatura de E-mail</h3>
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-lg border border-slate-100">
          <div className="flex gap-4">
            <div className="w-1 bg-gradient-to-b from-[#2F79B7] to-[#3DAAD0] rounded-full"></div>
            <div>
              <p className="font-semibold text-slate-800">Sara Oliveira</p>
              <p className="text-[#2F79B7] text-sm">Consultora Comercial</p>
              <div className="mt-3 space-y-1 text-sm text-slate-500">
                <p>📞 +55 (62) 99993-3283</p>
                <p>✉️ sara@naiad.com.br</p>
                <p>🌐 www.naiad.com.br</p>
              </div>
              <div className="mt-3 pt-3 border-t border-slate-100">
                <img src={naiadLogo} alt="Naiad" className="h-6 w-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'overview': return renderOverview();
      case 'colors': return renderColors();
      case 'typography': return renderTypography();
      case 'logo': return renderLogo();
      case 'voice': return renderVoice();
      case 'applications': return renderApplications();
      default: return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFEFE]" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-[#3DAAD0]/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={naiadLogo} alt="Naiad" className="h-10 w-auto" />
            </div>
            <nav className="hidden md:flex gap-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-[#2F79B7] text-white'
                      : 'text-slate-600 hover:bg-[#F8FCFC]'
                  }`}
                >
                  <span className="mr-2">{section.icon}</span>
                  {section.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className="md:hidden sticky top-[73px] z-40 bg-white border-b border-slate-100 overflow-x-auto">
        <div className="flex gap-2 p-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
                activeSection === section.id
                  ? 'bg-[#2F79B7] text-white'
                  : 'bg-slate-100 text-slate-600'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-[#1A1A2E] text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img src={naiadLogo} alt="Naiad" className="h-10 w-auto brightness-0 invert" />
            </div>
            <p className="text-white/50 text-sm">
              © 2025 Naiad. Qualidade que transforma.
            </p>
            <div className="flex gap-6 text-sm text-white/70">
              <a href="https://www.naiad.com.br" className="hover:text-white transition-colors">www.naiad.com.br</a>
              <a href="mailto:sara@naiad.com.br" className="hover:text-white transition-colors">Contato</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NaiadBrandGuidelines;