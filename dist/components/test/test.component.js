System.register(['@angular/core', '../../services/repo.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, repo_service_1;
    var TestComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (repo_service_1_1) {
                repo_service_1 = repo_service_1_1;
            }],
        execute: function() {
            TestComponent = (function () {
                function TestComponent(_repoService) {
                    this._repoService = _repoService;
                    console.log('test OK');
                }
                TestComponent.prototype.loadRepoByUser = function (term) {
                    var _this = this;
                    this.userName = term;
                    this._repoService.loadRepoByUser(term)
                        .subscribe(function (repos) { return _this.repos = repos; }, function (error) { return _this.errorMessage = error; });
                };
                TestComponent.prototype.loadBranch = function (term, branch) {
                    var _this = this;
                    this.userName = term;
                    this._repoService.loadBranch(term, branch)
                        .subscribe(function (branchs) { return _this.branchs = branchs; }, function (error) { return _this.errorMessage = error; });
                    console.log(this.branchs);
                };
                TestComponent.prototype.ngOnInit = function () {
                };
                TestComponent = __decorate([
                    core_1.Component({
                        selector: 'my-test',
                        template: "\n    \t\t  <div class=\"col-md-6\">\n    \t\t  <div>\n    \t\t  \t<input #term (keyup)=\"loadRepoByUser(term.value)\" placeholder=\"userName\"/>\n    \t\t  </div>\n    \t\t   <h2>Repos</h2>\n              <ul class=\"heroes\">\n                <li *ngFor=\"let repo of repos\">\n                  <span class=\"badge\">{{repo.full_name}}</span> {{repo.full_name}}\n                </li>\n              </ul>\n              </div>\n          <div>\n          <input #branch (keyup)=\"loadBranch(term.value,branch.value)\" placeholder=\"branch\"/>\n          </div>\n               ",
                        providers: [repo_service_1.RepoService]
                    }), 
                    __metadata('design:paramtypes', [repo_service_1.RepoService])
                ], TestComponent);
                return TestComponent;
            }());
            exports_1("TestComponent", TestComponent);
        }
    }
});