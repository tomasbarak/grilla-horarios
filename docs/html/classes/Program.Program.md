[grilla-horarios](../README.md) / [Modules](../modules.md) / [Program](../modules/Program.md) / Program

# Class: Program

[Program](../modules/Program.md).Program

## Table of contents

### Constructors

- [constructor](Program.Program.md#constructor)

### Properties

- [conductores](Program.Program.md#conductores)
- [dayOfWeek](Program.Program.md#dayofweek)
- [description](Program.Program.md#description)
- [endTime](Program.Program.md#endtime)
- [id](Program.Program.md#id)
- [name](Program.Program.md#name)
- [productores](Program.Program.md#productores)
- [startTime](Program.Program.md#starttime)

### Methods

- [addConductor](Program.Program.md#addconductor)
- [addProductor](Program.Program.md#addproductor)
- [getConductores](Program.Program.md#getconductores)
- [getDayOfWeek](Program.Program.md#getdayofweek)
- [getDescription](Program.Program.md#getdescription)
- [getEndTime](Program.Program.md#getendtime)
- [getId](Program.Program.md#getid)
- [getName](Program.Program.md#getname)
- [getProductores](Program.Program.md#getproductores)
- [getStartTime](Program.Program.md#getstarttime)
- [removeConductor](Program.Program.md#removeconductor)
- [removeProductor](Program.Program.md#removeproductor)
- [setConductores](Program.Program.md#setconductores)
- [setDayOfWeek](Program.Program.md#setdayofweek)
- [setDescription](Program.Program.md#setdescription)
- [setEndTime](Program.Program.md#setendtime)
- [setId](Program.Program.md#setid)
- [setName](Program.Program.md#setname)
- [setProductores](Program.Program.md#setproductores)
- [setStartTime](Program.Program.md#setstarttime)

## Constructors

### constructor

• **new Program**(`id`, `name`, `description`, `dayOfWeek`, `startTime`, `endTime`, `conductores`, `productores`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `name` | `string` |
| `description` | `string` |
| `dayOfWeek` | `number` |
| `startTime` | `number` |
| `endTime` | `number` |
| `conductores` | [`Person`](Person.Person.md)[] |
| `productores` | [`Person`](Person.Person.md)[] |

#### Defined in

[Program.ts:13](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/Program.ts#L13)

## Properties

### conductores

• `Private` **conductores**: [`Person`](Person.Person.md)[]

#### Defined in

[Program.ts:10](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/Program.ts#L10)

___

### dayOfWeek

• `Private` **dayOfWeek**: `number`

#### Defined in

[Program.ts:7](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/Program.ts#L7)

___

### description

• `Private` **description**: `string`

#### Defined in

[Program.ts:6](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/Program.ts#L6)

___

### endTime

• `Private` **endTime**: `number`

#### Defined in

[Program.ts:9](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/Program.ts#L9)

___

### id

• `Private` **id**: `number`

#### Defined in

[Program.ts:4](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/Program.ts#L4)

___

### name

• `Private` **name**: `string`

#### Defined in

[Program.ts:5](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/Program.ts#L5)

___

### productores

• `Private` **productores**: [`Person`](Person.Person.md)[]

#### Defined in

[Program.ts:11](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/Program.ts#L11)

___

### startTime

• `Private` **startTime**: `number`

#### Defined in

[Program.ts:8](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/Program.ts#L8)

## Methods

### addConductor

▸ **addConductor**(`conductor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `conductor` | [`Person`](Person.Person.md) |

#### Returns

`void`

#### Defined in

[Program.ts:94](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/Program.ts#L94)

___

### addProductor

▸ **addProductor**(`productor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `productor` | [`Person`](Person.Person.md) |

#### Returns

`void`

#### Defined in

[Program.ts:98](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/Program.ts#L98)

___

### getConductores

▸ **getConductores**(): [`Person`](Person.Person.md)[]

#### Returns

[`Person`](Person.Person.md)[]

#### Defined in

[Program.ts:50](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/Program.ts#L50)

___

### getDayOfWeek

▸ **getDayOfWeek**(): `number`

#### Returns

`number`

#### Defined in

[Program.ts:38](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/Program.ts#L38)

___

### getDescription

▸ **getDescription**(): `string`

#### Returns

`string`

#### Defined in

[Program.ts:34](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/Program.ts#L34)

___

### getEndTime

▸ **getEndTime**(): `number`

#### Returns

`number`

#### Defined in

[Program.ts:46](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/Program.ts#L46)

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Defined in

[Program.ts:26](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/Program.ts#L26)

___

### getName

▸ **getName**(): `string`

#### Returns

`string`

#### Defined in

[Program.ts:30](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/Program.ts#L30)

___

### getProductores

▸ **getProductores**(): [`Person`](Person.Person.md)[]

#### Returns

[`Person`](Person.Person.md)[]

#### Defined in

[Program.ts:54](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/Program.ts#L54)

___

### getStartTime

▸ **getStartTime**(): `number`

#### Returns

`number`

#### Defined in

[Program.ts:42](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/Program.ts#L42)

___

### removeConductor

▸ **removeConductor**(`conductor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `conductor` | [`Person`](Person.Person.md) |

#### Returns

`void`

#### Defined in

[Program.ts:102](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/Program.ts#L102)

___

### removeProductor

▸ **removeProductor**(`productor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `productor` | [`Person`](Person.Person.md) |

#### Returns

`void`

#### Defined in

[Program.ts:106](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/Program.ts#L106)

___

### setConductores

▸ **setConductores**(`conductores`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `conductores` | [`Person`](Person.Person.md)[] |

#### Returns

`void`

#### Defined in

[Program.ts:84](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/Program.ts#L84)

___

### setDayOfWeek

▸ **setDayOfWeek**(`dayOfWeek`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dayOfWeek` | `number` |

#### Returns

`void`

#### Defined in

[Program.ts:72](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/Program.ts#L72)

___

### setDescription

▸ **setDescription**(`description`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

#### Returns

`void`

#### Defined in

[Program.ts:68](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/Program.ts#L68)

___

### setEndTime

▸ **setEndTime**(`endTime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endTime` | `number` |

#### Returns

`void`

#### Defined in

[Program.ts:80](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/Program.ts#L80)

___

### setId

▸ **setId**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`void`

#### Defined in

[Program.ts:60](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/Program.ts#L60)

___

### setName

▸ **setName**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

[Program.ts:64](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/Program.ts#L64)

___

### setProductores

▸ **setProductores**(`productores`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `productores` | [`Person`](Person.Person.md)[] |

#### Returns

`void`

#### Defined in

[Program.ts:88](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/Program.ts#L88)

___

### setStartTime

▸ **setStartTime**(`startTime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `startTime` | `number` |

#### Returns

`void`

#### Defined in

[Program.ts:76](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/Program.ts#L76)
