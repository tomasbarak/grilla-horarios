[grilla-horarios](../README.md) / [Modules](../modules.md) / [TimeGrid](../modules/TimeGrid.md) / TimeGrid

# Class: TimeGrid

[TimeGrid](../modules/TimeGrid.md).TimeGrid

## Table of contents

### Constructors

- [constructor](TimeGrid.TimeGrid.md#constructor)

### Properties

- [id](TimeGrid.TimeGrid.md#id)
- [programs](TimeGrid.TimeGrid.md#programs)

### Methods

- [addProgram](TimeGrid.TimeGrid.md#addprogram)
- [getId](TimeGrid.TimeGrid.md#getid)
- [getProgramByConductor](TimeGrid.TimeGrid.md#getprogrambyconductor)
- [getProgramByDescription](TimeGrid.TimeGrid.md#getprogrambydescription)
- [getProgramById](TimeGrid.TimeGrid.md#getprogrambyid)
- [getProgramByName](TimeGrid.TimeGrid.md#getprogrambyname)
- [getProgramByProductor](TimeGrid.TimeGrid.md#getprogrambyproductor)
- [getPrograms](TimeGrid.TimeGrid.md#getprograms)
- [removeProgram](TimeGrid.TimeGrid.md#removeprogram)
- [setId](TimeGrid.TimeGrid.md#setid)
- [setPrograms](TimeGrid.TimeGrid.md#setprograms)

## Constructors

### constructor

• **new TimeGrid**(`id`, `programs`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `programs` | [`Program`](Program.Program.md)[] |

#### Defined in

[TimeGrid.ts:8](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/TimeGrid.ts#L8)

## Properties

### id

• `Private` **id**: `number`

#### Defined in

[TimeGrid.ts:5](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/TimeGrid.ts#L5)

___

### programs

• `Private` **programs**: [`Program`](Program.Program.md)[]

#### Defined in

[TimeGrid.ts:6](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/TimeGrid.ts#L6)

## Methods

### addProgram

▸ **addProgram**(`program`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`Program`](Program.Program.md) |

#### Returns

`void`

#### Defined in

[TimeGrid.ts:35](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/TimeGrid.ts#L35)

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Defined in

[TimeGrid.ts:15](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/TimeGrid.ts#L15)

___

### getProgramByConductor

▸ **getProgramByConductor**(`conductor`): `undefined` \| [`Program`](Program.Program.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `conductor` | [`Person`](Person.Person.md) |

#### Returns

`undefined` \| [`Program`](Program.Program.md)

#### Defined in

[TimeGrid.ts:62](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/TimeGrid.ts#L62)

___

### getProgramByDescription

▸ **getProgramByDescription**(`description`): `undefined` \| [`Program`](Program.Program.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

#### Returns

`undefined` \| [`Program`](Program.Program.md)

#### Defined in

[TimeGrid.ts:58](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/TimeGrid.ts#L58)

___

### getProgramById

▸ **getProgramById**(`id`): `undefined` \| [`Program`](Program.Program.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`undefined` \| [`Program`](Program.Program.md)

#### Defined in

[TimeGrid.ts:50](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/TimeGrid.ts#L50)

___

### getProgramByName

▸ **getProgramByName**(`name`): `undefined` \| [`Program`](Program.Program.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| [`Program`](Program.Program.md)

#### Defined in

[TimeGrid.ts:54](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/TimeGrid.ts#L54)

___

### getProgramByProductor

▸ **getProgramByProductor**(`productor`): `undefined` \| [`Program`](Program.Program.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `productor` | [`Person`](Person.Person.md) |

#### Returns

`undefined` \| [`Program`](Program.Program.md)

#### Defined in

[TimeGrid.ts:66](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/TimeGrid.ts#L66)

___

### getPrograms

▸ **getPrograms**(): [`Program`](Program.Program.md)[]

#### Returns

[`Program`](Program.Program.md)[]

#### Defined in

[TimeGrid.ts:19](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/TimeGrid.ts#L19)

___

### removeProgram

▸ **removeProgram**(`program`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`Program`](Program.Program.md) |

#### Returns

`void`

#### Defined in

[TimeGrid.ts:43](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/TimeGrid.ts#L43)

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

[TimeGrid.ts:25](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/TimeGrid.ts#L25)

___

### setPrograms

▸ **setPrograms**(`programs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `programs` | [`Program`](Program.Program.md)[] |

#### Returns

`void`

#### Defined in

[TimeGrid.ts:29](https://github.com/tomasbarak/grilla-horarios/blob/2fa1938/src/models/TimeGrid.ts#L29)
