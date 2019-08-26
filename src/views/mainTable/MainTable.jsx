import React, {Component} from 'react';
import Table from '../../components/table/Table';
import Tbody from '../../components/table/Tbody';
import Td from '../../components/table/Td';
import Th from '../../components/table/Th';
import Tr from '../../components/table/Tr';

class MainTable extends Component {

    makeTable() {
        const classTr='character-row';
        return this.props.data.map((data, i) => {
           const { name, race, age, weapon } = data
           return (
              <Tr class={classTr}>
                 <Td>{name}</Td>
                 <Td>{race}</Td>
                 <Td>{age}</Td>
                 <Td>{weapon}</Td>
                 <Td>
                    <div className="controls">
                        <div>☠ Kill</div>
                        <div>💍 Use Ring</div>
                    </div>
                </Td>
              </Tr>
           )
        })
     }

    render() {
        const classTr = 'character-row';
        const classTable = 'characters-table';
        return (
            <Table class={classTable}>
                <Tbody>
                    <Tr class={classTr}>
                        <Th>Name</Th>
                        <Th>Race</Th>
                        <Th>Age</Th>
                        <Th>Weapon</Th>
                        <Th></Th>
                    </Tr>
                        {this.makeTable()}
                </Tbody>
            </Table>
        )
    }        
}

export default MainTable;