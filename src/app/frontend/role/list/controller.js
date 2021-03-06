// Copyright 2017 The Kubernetes Dashboard Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @final
 */
export class RoleListController {
  /**
   * @param {!backendApi.RoleList} roleList
   * @param {!angular.Resource}kdRoleListResource
   * @ngInject
   */
  constructor(roleList, kdRoleListResource) {
    /** @export {!backendApi.RoleList} */
    this.roleList = roleList;

    /** @export {!angular.Resource} */
    this.roleListResource = kdRoleListResource;
  }

  /**
   * @return {boolean}
   * @export
   */
  shouldShowZeroState() {
    return this.roleList.items === null || this.roleList.items.length === 0;
  }
}
