/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function buscarContatos () {

    var opcoes = new ContactFindOptions();
    opcoes.filter = document.getElementById('contato').value;
    console.log("Filter", opcoes.filter);
    opcoes.multiple = true;
    opcoes.desiredFields = [navigator.contacts.fieldType.id];
    opcoes.hasPhoneNumber = true;
    var filter = ["displayName","name"];
    navigator.contacts.find(filter, onSuccess, onError, opcoes);

};

function onSuccess(contacts){

    var response = '';

    for (var i = 0; i < contacts.length; i++) {
       response += "<tr><td>" + contacts[i].displayName + "<td><tr>";
    }

    document.getElementById('contatos').innerHTML = response;

};



function onError(contactError) {
    alert('onError!');
};