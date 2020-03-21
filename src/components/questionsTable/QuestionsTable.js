import React from "react";
import axios from "axios";
import faker from "faker";
import QuestionRow from "../questionRow/QuestionRow";
import DifficultyFilter from "../difficultyFilter/DifficultyFilter";
import CategoryFilter from "../categoryFilter/CategoryFilter";
import "./QuestionsTable.scss";


class QuestionsTable extends React.Component {
    state = {
        questions: null,
        difficultyLevels: [],
        categories: [],
        filteredDifficultyLevels: [],
        filteredCategories: []
    }

    componentDidMount = () => {
        axios.get("https://opentdb.com/api.php?amount=10")
        .then(response => {
            const dataFromApi = response.data.results;
            const questionsArr = dataFromApi.map(question => this.addIdAndAuthor(question));
            const difficultyLevels = [...new Set(questionsArr.map(question => question.difficulty))];
            const categories = [...new Set(questionsArr.map(question => question.category))];
            this.setState({ questions: questionsArr, difficultyLevels: difficultyLevels, categories: categories })
        })
        .catch(err => console.log(err))
    }

    addIdAndAuthor = (question) => {
        question.id = Math.floor(Math.random() * 1000);
        question.author = faker.internet.userName();
        return question;
    }

    handleDifficultyFilter = e => {
        let level = e.target.value;
        let newFilter = [...this.state.filteredDifficultyLevels];
        let levelIndex = this.state.filteredDifficultyLevels.indexOf(level);
        if(levelIndex > -1) {
            newFilter.splice(levelIndex, 1);
        } else {
            newFilter.push(level);
        }
        this.setState({ filteredDifficultyLevels: newFilter })
    }

    handleCategoryFilter = e => {
        let category = e.target.value;
        let newFilter = [...this.state.filteredCategories];
        let categoryIndex = this.state.filteredCategories.indexOf(category);
        if(categoryIndex > -1) {
            newFilter.splice(categoryIndex, 1);
        } else {
            newFilter.push(category);
        }
        this.setState({ filteredCategories: newFilter })
    }

    render() {
        return (
            this.state.questions ? (
                <div className="main">
                    <h1 className="title">Browse Questions</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="id">ID<i className="fas fa-sort"></i></th>
                                <th className="category">Category</th>
                                <th className="type">Type</th>
                                <th>Difficulty</th>
                                <th>Question / Statement</th>
                                <th>Created By</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.filteredDifficultyLevels.length ? (
                                this.state.filteredCategories.length ? (
                                    this.state.questions.filter(question => this.state.filteredDifficultyLevels.includes(question.difficulty)).filter(questionFilteredByDifficulty => this.state.filteredCategories.includes(questionFilteredByDifficulty.category)).map((question, idx) => <QuestionRow key={idx} questionData={question} />)
                                ) : (
                                    this.state.questions.filter(question => this.state.filteredDifficultyLevels.includes(question.difficulty)).map((question, idx) => <QuestionRow key={idx} questionData={question} />)
                                )
                            ) : (
                                this.state.filteredCategories.length ? (
                                    this.state.questions.filter(question => this.state.filteredCategories.includes(question.category)).map((question, idx) => <QuestionRow key={idx} questionData={question} />)
                                ) : (
                                    this.state.questions.map((question, idx) => <QuestionRow key={idx} questionData={question} />)
                                )
                            )}
                        </tbody>
                    </table>

                    <DifficultyFilter levels={this.state.difficultyLevels} handleChange={this.handleDifficultyFilter}/>
                    <CategoryFilter categories={this.state.categories} handleChange={this.handleCategoryFilter}/>
                </div>
            ) : (
                <h3 className="loading">Loading data...</h3>
            )
        )
    }
}

export default QuestionsTable;