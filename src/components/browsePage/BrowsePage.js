import React from "react";
import axios from "axios";
import faker from "faker";
import QuestionsTable from "../questionsTable/QuestionsTable";
import DifficultyFilter from "../difficultyFilter/DifficultyFilter";
import CategoryFilter from "../categoryFilter/CategoryFilter";
import "./BrowsePage.scss";

class BrowsePage extends React.Component {
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
            const difficultyLevels = [...new Set(questionsArr.map(question => question.difficulty))].sort();
            difficultyLevels.sort((a, b) => a === 'medium' && b === 'hard' ? -1 : 1);
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
                <div className="browsePage">
                    <div className="filters">
                        <DifficultyFilter levels={this.state.difficultyLevels} handleChange={this.handleDifficultyFilter}/>
                        <CategoryFilter categories={this.state.categories} handleChange={this.handleCategoryFilter}/>
                    </div>
                    <div className="main">
                        <h1 className="title">Browse Questions</h1>
                        <QuestionsTable {...this.state}/>
                    </div>
                </div>
            ) : (
                <h3 className="loading">Loading data...</h3>
            )
        )
    }
}

export default BrowsePage;