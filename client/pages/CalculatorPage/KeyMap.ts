import { NumberKey } from "../../enums/NumberKey"
import { OperationKey } from "../../enums/OperationKey"
import { ResetKey } from "../../enums/ResetKey"


export const KeyMap = [
    {name: ResetKey.RESET, className:"grey small-size"},
    {name: OperationKey.PLUS_MINUS, className:"grey"},
    {name: OperationKey.PERCENTAGE, className:"grey"},
    {name: OperationKey.DIVIDE, className:"orange big-size"},
    {name: NumberKey.SEVEN, className:"primary"},
    {name: NumberKey.EIGHT, className:"primary"},
    {name: NumberKey.NINE, className:"primary"},
    {name: OperationKey.MULTIPLY, className:"orange"},
    {name: NumberKey.FOUR, className:"primary"},
    {name: NumberKey.FIVE, className:"primary"},
    {name: NumberKey.SIX, className:"primary"},
    {name: OperationKey.SUBTRACT, className:"orange big-size"},
    {name: NumberKey.ONE, className:"primary"},
    {name: NumberKey.TWO, className:"primary"},
    {name: NumberKey.THREE, className:"primary"},
    {name: OperationKey.ADD, className:"orange"},
    {name: NumberKey.ZERO, className:"primary double-grid border-radius-left-bottom"},
    {name: OperationKey.DOT, className:"primary"},
    {name: OperationKey.EQUAL, className:"orange border-radius-right-bottom"},
]